import { CONTACT } from "../constants"

export const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
    <h1 className="my-20 text-center text-4xl">Get in Touch</h1>
    <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#" className="border-b">{CONTACT.email}</a>
    </div>
    
    </div>    
  )
}
