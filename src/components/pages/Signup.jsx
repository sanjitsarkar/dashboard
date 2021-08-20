import React from 'react'

const Signup = () => {
    const handleSignup = ()=>{
        
    }
    return (
        <div className="signup">
            <form onSubmit={(e)=>handleSignup(e)}>
                <input type="text" placeholder="Full Name" />
            </form>
        </div>
    )
}

export default Signup
