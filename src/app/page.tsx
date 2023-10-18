import Button from "~/components/Layout/Button";

export default function Home() {
    return (
        <div>
            <div>
                <div className="flex mt-[50px] sm:mt-[150px] flex-col">
                    <h3 className="text-3xl font-bold">Hi, I&apos; m Rupesh Sharma</h3>
                </div>
                <h1 className="animated-heading" data-text="FULLSTACK DEVELOPER">
                    FULLSTACK DEVELOPER
                </h1>

                <p className="max-w-[800px] font-semibold">
                    I am a motivated and results-oriented MERN Stack Developer who is passionate about creating robust and
                    scalable web applications, with a strong focus on the front-end. With expertise in JavaScript, React, and
                    Next.js, I specialize in providing comprehensive solutions that go beyond the user interface. My
                    front-end skills, combined with a solid foundation in back-end technologies such as Node.js, MongoDB, and
                    Nest.js, enable me to deliver exceptional user experiences and seamlessly integrate them with reliable
                    server-side functionalities. Whether it&apos;s crafting engaging user interfaces or optimizing
                    performance, I am committed to pushing the boundaries of web development to deliver top-notch
                    applications.
                </p>

                <div className="mt-10 space-x-4">
                    <Button title={"projects"} />
                    <Button title={"contact"} />
                </div>
            </div>
        </div>
    );
}
