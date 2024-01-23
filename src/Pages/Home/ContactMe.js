export default function ContactMe({newContact,handleChange,handleSubmit}){
    return (
        <section id="Contact" className="contact--section">
            <div>
                <p className="sub--title">Get In Touch</p>
                <h2>Contact Me</h2>
                <p className="text-lg">
                    Want to reach out? Drop me a message.
                </p>
            </div>
            <form action="" className="contact--form--container" onSubmit={handleSubmit}>
                <div className="container">
                    <label htmlFor="firts-name" className="contact--label">
                        <span className="text-md">First Name</span>
                        <input type="text"
                            className="contact--input text-md"
                            name="firstName"
                            id="first-name"
                            value={newContact.firstName || ""}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label htmlFor="last-name" className="contact--label">
                        <span className="text-md">Last Name</span>
                        <input type="text"
                            className="contact--input text-md"
                            name="lastName"
                            id="last-name"
                            value={newContact.lastName || ""}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label htmlFor="email" className="contact--label">
                        <span className="text-md">Email</span>
                        <input type="email"
                            className="contact--input text-md"
                            name="email"
                            id="email"
                            required
                        />
                    </label>
                </div>
                {/* <label htmlFor="choose-topic" className="contact--label">
                    <span className="text-md">Choose a topic</span>
                    <select id="choose-topic" className="contact--input text-md">
                        <option>Select One...</option>
                        <option>Job Offer</option>
                        <option>Collaborate</option>
                        <option>Feedback</option>
                    </select>
                </label> */}
                <label htmlFor="message" className="contact--label">
                    <span className="text-md">Message</span>
                    <textarea
                        className="contact--input text-md"
                        name="message"
                        rows="8"
                        id="message"
                        value={newContact.message || ""}
                        onChange={handleChange}
                        placeholder="Type your message..."
                    />
                </label>
                {/* <label htmlFor="checkbox" className="checkbox--label">
                    <input type="checkbox" required name="checkbox" 
                    id="checkbox" />
                    <span className="text-sm">I accept the terms</span>
                </label> */}
                <div>
                    <button className="btn btn-primary contact--form--btn">
                    Submit</button>
                </div>
            </form>
        </section>
    )
}