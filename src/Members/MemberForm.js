import React, {useState} from "react";

const MemberForm = props => {

    const [member, setMember] = useState({name: "", email: "", role: ""})

    const handleChanges = event => {
        setMember({...member, [event.target.name] : event.target.value})
        console.log("Event Target:", event.target.value)
    };

    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(member);
        setMember({name: "", email: "", role: ""})
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name </label>
            <input
                type="text"
                placeholder="Name"
                id="name"
                onChange={handleChanges}
                name="name"
                value={member.name}
            /><br />
            <label htmlFor="email">Email </label>
            <input
                type="text"
                placeholder="Email"
                id="email"
                onChange={handleChanges}
                name="email"
                value={member.email}
            /><br />
            <label htmlFor="role">Role </label>
            <input
                type="text"
                placeholder="Role"
                id="role"
                onChange={handleChanges}
                name="role"
                value={member.role}
            /><br />
            <button type="submit">Add Member</button>
        </form>
    )
}

export default MemberForm;