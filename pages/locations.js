import React from "react";
import Map from "../components/locations/Map"
import Layout from "../components/common/Layout"

export default function Locations() {
    return (
        <Layout>
            <main>
                <section>
                    <h1>Locations</h1>
                    <Map />
                </section>
            </main>
        </Layout>
    )
}