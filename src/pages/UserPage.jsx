import useUser from "../hooks/use-user";


function userPage() {
    const { user, isLoading, error} = useUser();

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        
    }


    return <h1>This is a user page.</h1>;
}

export default userPage;