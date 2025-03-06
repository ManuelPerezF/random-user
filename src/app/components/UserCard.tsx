'use client';
import React from 'react';

interface UserCardProps {
    user: {
        name: {
            first: string;
            last: string;
        };
        email: string;
        picture: {
            large: string;
        };
        location: {
            street: {
                number: number;
                name: string;
            };
        };
        login: {
            password: string;
        }
        dob: {
            date: string;
        };
        phone: string;
    };
    onGenerateNewUser: () => void;
}

export default function UserCard({ user }: UserCardProps) {
    if (!user) {
        return <div className="user-card">No user data available</div>;
    }

    return (
        <div className="bg-blue-400 rounded shadow p-4 relative mx-auto my-2 max-w-md">
            <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} className="rounded-full mx-auto mb-4" />
            <h1 className="text-2xl font-bold">{`${user.name.first} ${user.name.last}`}</h1>
            <p>Email: {user.email}</p>
            <p>Birthday: {user.dob.date}</p>
            <p>Phone: {user.phone}</p>
            <p>Address: {`${user.location.street.number} ${user.location.street.name}`}</p>
            <p>Password: {user.login.password}</p>
        </div>


        
    );
}