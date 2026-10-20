import SocialButton from "./SocialButton.tsx"
import { socials } from "./socials.ts"

export default function Contact() {
    const buttons = socials.map(social => {
        return <SocialButton key={social.id} social={social}></SocialButton>
    })

    return (
        <section className="flex flex-row gap-5 justify-center mb-10" id="contacts">
            {buttons}
        </section>
    )
}
