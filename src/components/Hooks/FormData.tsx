import React, { useState } from 'react';

interface FormData {
    username: string;
    fullname: string;
    age: string;
}

const UserForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        username: '',
        fullname: '',
        age: '',
    });

    const [submittedData, setSubmittedData] = useState<FormData | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmittedData(formData);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>User Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username: </label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Full Name: </label>
                    <input
                        type="text"
                        name="fullname"
                        value={formData.fullname}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Age: </label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" style={{ marginTop: '10px' }}>
                    Submit
                </button>
            </form>

            {submittedData && (
                <div style={{ marginTop: '20px' }}>
                    <h2>Submitted Data:</h2>
                    <p>Username: {submittedData.username}</p>
                    <p>Full Name: {submittedData.fullname}</p>
                    <p>Age: {submittedData.age}</p>
                </div>
            )}
        </div>
    );
};

export default UserForm;
