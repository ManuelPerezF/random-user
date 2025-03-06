'use client';
import React from 'react';
import { useRandomUserApi } from './components/useRandomUserApi';
import UserCard from './components/UserCard';

export default function Page()  {
    const { user, loading, error, fetchRandomUser } = useRandomUserApi();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="mx-auto p-50 place-items-center">
            {user && <UserCard user={user} onGenerateNewUser={fetchRandomUser} />}
            <button 
            onClick={fetchRandomUser} 
            className="bg-blue-800 text-white rounded p-2 ">
            Generate New User
            </button>
        </div>
    );
};

