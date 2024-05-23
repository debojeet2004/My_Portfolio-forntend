import React, { useState } from 'react';

function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
        
        const handleChange = (e) => {
            const { id, value } = e.target;
            setFormData((prevData) => ({ ...prevData, [id]: value }));
        };
        
        const handleSubmit = async (e) => {
            e.preventDefault();
            const response = await fetch('https://protfolio-backend-8h9u.onrender.com/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            // console.log(response);
                if (response.ok) {
                alert('Message sent successfully!');
                } else {
                alert('Failed to send message.');
                }
        };
    return (
        <div 
        style={{ transform: "translateZ(5rem)", transformStyle: "preserve-3d" }}
        className="border border-stone-800 w-full lg:w-[50%] xl:w-[40%] h-full hover:bg-stone-900 rounded-xl flex flex-col justify-between lg:justify-around p-2 md:p-4 gap-3 items-center"
    >
        <div 
        style={{ transform: "translateZ(6rem)", transformStyle: "preserve-3d" }} 
        className="border border-stone-800 p-1 md:p-2 w-full rounded-lg hover:bg-stone-800 flex flex-col font-[TRANSFORMA] font-bold justify-center items-start gap-2 md:gap-4"
        >
        <label 
            className="text-[.7rem] uppercase tracking-wide md:text-[1.2rem] lg:text-[1.5rem]" 
            htmlFor="name"
        >
            Full Name:
        </label>
        <input 
            type="text" 
            id="name" 
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name" 
            className="outline-none font-thin opacity-50 w-full bg-transparent border border-stone-700 rounded-sm p-1 text-[.6rem] md:text-[1rem] lg:text-[1.3rem] xl:text-[1rem]" 
        />
        </div>
        <div 
        style={{ transform: "translateZ(6rem)", transformStyle: "preserve-3d" }} 
        className="border border-stone-800 p-1 md:p-2 w-full rounded-lg hover:bg-stone-800 flex flex-col font-[TRANSFORMA] font-bold justify-center items-start gap-2 md:gap-4"
        >
        <label 
            className="text-[.7rem] uppercase tracking-wide md:text-[1.2rem] lg:text-[1.5rem]" 
            htmlFor="email"
        >
            Email:
        </label>
        <input 
            type="text" 
            id="email" 
            value={formData.email}
            onChange={handleChange}
            placeholder="abcd...@gmail.com" 
            className="outline-none font-thin opacity-50 w-full bg-transparent border border-stone-700 rounded-sm p-1 text-[.6rem] md:text-[1rem] lg:text-[1.3rem] xl:text-[1rem]" 
        />
        </div>
        <div 
        style={{ transform: "translateZ(6rem)", transformStyle: "preserve-3d" }} 
        className="border border-stone-800 p-1 md:p-2 w-full rounded-lg hover:bg-stone-800 flex flex-col font-[TRANSFORMA] font-bold justify-center items-start gap-2 md:gap-4"
        >
        <label 
            className="text-[.7rem] uppercase tracking-wide md:text-[1.2rem] lg:text-[1.5rem]" 
            htmlFor="message"
        >
            Message:
        </label>
        <textarea 
            id="message" 
            value={formData.message}
            onChange={handleChange}
            placeholder="Hey! tell me somthing" 
            className="hide_scrollbar outline-none font-thin opacity-50 w-full bg-transparent border border-stone-700 rounded-sm p-1 text-[.6rem] md:text-[1rem] lg:text-[1.3rem] xl:text-[1rem] min-h-[2rem] lg:min-h-[4rem] max-h-[3rem] md:max-h-[5rem]"
        />
        </div>
        <button 
        style={{ transform: "translateZ(5rem)", transformStyle: "preserve-3d" }} 
        className="border-2 p-1 text-[.7rem] md:text-[1.4rem] md:p-2 w-[5rem] md:w-[8rem] lg:w-[10rem] rounded-md border-stone-700 uppercase opacity-70 hover:opacity-100 hover:border-stone-400 active:bg-stone-600"
        onClick={handleSubmit}
        >
        Send
        </button>
    </div>
    )
}

export default Form



