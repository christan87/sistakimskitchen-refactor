import React from "react";
import Map from "../components/locations/Map"
import Layout from "../components/common/Layout"

export default function Locations() {
    return (
        <Layout>
            <main>
                <section>
                    <Map />
                </section>
            </main>
        </Layout>
    )
}