import React from "react";
import Layout from "../components/common/Layout";
import ContactForm from "../components/booking/ContactForm";
export default function Booking() {
    return (
        <Layout>
            <main>
                <section>
                    <ContactForm />
                </section>
            </main>
        </Layout>
    )
}