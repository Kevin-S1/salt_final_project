import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Details = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    
    if (isLoading) {
        return <div>Loading ...</div>;
    }
    
    return (
        <>
            <div>
                <h4>User Profile:</h4>
                <img src={user?.picture} alt={user?.name} />
                <h2>{user?.name}</h2>
                <p>{user?.email}</p>
            </div>
        
        </>
    );
};

export default Details;