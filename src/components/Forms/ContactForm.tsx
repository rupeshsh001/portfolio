"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import SubmitLoader from "../Loading/SubmitLoader";

type FormData = {
    fullName: string;
    email: string;
    phoneNo: string;
    emailSubject: string;
    message: string;
};

type SheetDataType = {
    FullName: string;
    Email: string;
    PhoneNo: string;
    Subject: string;
    Description: string;
};

const ContactForm: React.FC = () => {
    const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID || "";
    const GOOGLE_CLIENT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL;
    const GOOGLE_SERVICE_PRIVATE_KEY = process.env.GOOGLE_SERVICE_PRIVATE_KEY;

    const serviceAccountAuth = new JWT({
        email: GOOGLE_CLIENT_EMAIL,
        key: GOOGLE_SERVICE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const doc = new GoogleSpreadsheet(SPREADSHEET_ID, serviceAccountAuth);

    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        email: "",
        phoneNo: "",
        emailSubject: "",
        message: "",
    });

    const [errors, setErrors] = useState<FormData>({
        fullName: "",
        email: "",
        phoneNo: "",
        emailSubject: "",
        message: "",
    });

    const [loader, setLoader] = useState<boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setErrors({
            ...errors,
            [name]: "",
        });
    };

    const validateForm = () => {
        const newErrors: FormData = {
            fullName: "",
            email: "",
            phoneNo: "",
            emailSubject: "",
            message: "",
        };

        if (formData.fullName.trim() === "") {
            newErrors.fullName = "Full Name is required";
        }
        if (formData.email.trim() === "") {
            newErrors.email = "Email is required";
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = "Invalid email format";
        }
        if (formData.phoneNo.trim() === "") {
            newErrors.phoneNo = "Phone No is required";
        }
        if (formData.emailSubject.trim() === "") {
            newErrors.emailSubject = "Email Subject is required";
        }
        if (formData.message.trim() === "") {
            newErrors.message = "Message is required";
        }

        setErrors(newErrors);
        return !Object.values(newErrors).some((error) => error !== "");
    };

    const isValidEmail = (email: string) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            const newRow = {
                FullName: formData.fullName,
                Email: formData.email,
                PhoneNo: formData.phoneNo,
                Subject: formData.emailSubject,
                Description: formData.message,
            };

            appendSpreadsheet(newRow);
        } else {
            console.log("Form data is invalid. Please check the errors.");
        }
    };

    const getInputClass = (fieldName: keyof FormData) => {
        return errors[fieldName] ? "input-box-error" : "input-box";
    };

    const appendSpreadsheet = async (row: SheetDataType) => {
        try {
            setLoader(true);
            await doc.loadInfo();
            console.log(doc, "doc here");
            const sheet = doc.sheetsById[0];
            await sheet.addRow(row);
            setFormData({
                fullName: "",
                email: "",
                phoneNo: "",
                emailSubject: "",
                message: "",
            });
            alert("we got you details will revert soon!");
        } catch (e) {
            console.error("Error: ", e);
        } finally {
            setLoader(false);
        }
    };

    return (
        <div className="flex justify-center w-full flex-col items-center pb-5">
            {loader && <SubmitLoader />}
            <h1 className="text-3xl font-bold">
                CONTACT <span className="text-secondary">ME!</span>
            </h1>

            <form className="mt-5" onSubmit={handleSubmit}>
                <div className="flex space-x-0 sm:space-x-3 my-2 flex-col sm:flex-row space-y-3 sm:space-y-0">
                    <input
                        type="text"
                        className={getInputClass("fullName")}
                        placeholder="Full Name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        className={getInputClass("email")}
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="hidden sm:flex space-x-3 my-2 ">
                    <p className="text-red-500 text-xs italic w-full sm:w-[300px]">{errors.fullName}</p>
                    <p className="text-red-500 text-xs italic w-full sm:w-[300px]">{errors.email}</p>
                </div>

                <div className="flex space-x-0 sm:space-x-3 my-2 flex-col sm:flex-row space-y-3 sm:space-y-0">
                    <input
                        type="text"
                        className={getInputClass("phoneNo")}
                        placeholder="Phone No"
                        name="phoneNo"
                        value={formData.phoneNo}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        className={getInputClass("emailSubject")}
                        placeholder="Email Subject"
                        name="emailSubject"
                        value={formData.emailSubject}
                        onChange={handleChange}
                    />
                </div>

                <div className="hidden sm:flex space-x-3 my-2 ">
                    <p className="text-red-500 text-xs italic w-full sm:w-[300px]">{errors.phoneNo}</p>
                    <p className="text-red-500 text-xs italic w-full sm:w-[300px]">{errors.emailSubject}</p>
                </div>
                <div>
                    <textarea
                        rows={8}
                        className={`${getInputClass("message")} w-full`}
                        placeholder="Enter Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>
                <div className="hidden sm:flex space-x-3 my-2 ">
                    <p className="text-red-500 text-xs italic w-full sm:w-[300px]">{errors.message}</p>
                </div>
                <div className="flex justify-center mt-8">
                    <button type="submit" className="btn-css">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
