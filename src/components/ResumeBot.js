import { useState } from "react";

export default function ResumeBot() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        dob: "",
        location: "",
        experience: "",
        skills: "",
        education: "",
        jobSite: "",
    });
    
    const [uploadMode, setUploadMode] = useState(false);
    const [resumeFile, setResumeFile] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileUpload = (e) => {
        setResumeFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting form", formData);
    };

    return (
        <div className="max-w-md mx-auto bg-gradient-to-r from-blue-500 to-purple-600 p-6 shadow-lg rounded-xl text-white text-center">
            <h2 className="text-2xl font-bold mb-4">InstaResume</h2>
            <div className="flex justify-center gap-4 mb-4">
                <button onClick={() => setUploadMode(false)} className={`px-4 py-2 rounded-full border-2 ${!uploadMode ? 'bg-white text-black' : 'bg-blue-400 text-white'}`}>Fill out form</button>
                <button onClick={() => setUploadMode(true)} className={`px-4 py-2 rounded-full border-2 ${uploadMode ? 'bg-white text-black' : 'bg-blue-400 text-white'}`}>Upload Resume</button>
            </div>
            {uploadMode ? (
                <div className="p-4 bg-white text-black rounded-lg">
                    <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileUpload} className="w-full p-3 border rounded" />
                    {resumeFile && <p className="mt-2">Selected: {resumeFile.name}</p>}
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-3 text-left">
                    <input name="name" placeholder="Full Name" onChange={handleChange} className="w-full p-3 border rounded text-black" required />
                    <input name="email" type="email" placeholder="Email" onChange={handleChange} className="w-full p-3 border rounded text-black" required />
                    <input name="phone" placeholder="Phone" onChange={handleChange} className="w-full p-3 border rounded text-black" required />
                    <input name="dob" type="date" placeholder="Date of Birth" onChange={handleChange} className="w-full p-3 border rounded text-black" required />
                    <input name="location" placeholder="Current Location" onChange={handleChange} className="w-full p-3 border rounded text-black" required />
                    <input name="experience" placeholder="Years of Experience" onChange={handleChange} className="w-full p-3 border rounded text-black" required />
                    <input name="skills" placeholder="Skills (comma-separated)" onChange={handleChange} className="w-full p-3 border rounded text-black" required />
                    <input name="education" placeholder="Highest Education" onChange={handleChange} className="w-full p-3 border rounded text-black" required />
                    <input name="jobSite" placeholder="Job Site URL" onChange={handleChange} className="w-full p-3 border rounded text-black" required />
                    <button type="submit" className="w-full bg-white text-blue-500 p-3 rounded hover:bg-gray-200">Submit</button>
                </form>
            )}
        </div>
    );
}
