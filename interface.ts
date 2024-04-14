interface User {
        email: string,
        // startTrial : () => String  // same as below
        startTrial() : string,
        googleId ? : string
}

interface User {
    githubId? : string   // we can just add more property on existing interface
}

const aditya: User = {email: "asditya@123.com" , startTrial: () => {
    return 'adi'
}}

interface Admin extends User {
    role?: 'dev' | 'admin'
}