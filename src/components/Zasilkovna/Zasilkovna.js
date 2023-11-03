import React, { useState, useEffect } from "react"
import useTranslations from "../useTranslations"
import * as styles from "./_Zasilkovna.module.scss"

const Zasilkovna = () => {

    const { 
        choose_point
     } = useTranslations()

    const [ Packeta, setPacketa ] = useState('')

    useEffect(() => {
        setPacketa(window.Packeta)
    })

    const packetaApiKey = 'a27ac5f8cac4d754'
    const showSelectedPickupPoint = (point) => {
        const saveElement = document.querySelector(".packeta-selector-value");
        saveElement.innerText = '';
        if (point) {
          console.log("Selected point", point);
          saveElement.innerText = "Address: " + point.formatedValue; 
        }
    }
    const packetaOptions = {
        country: "cz", 
        valueFormat: "\'Packeta\',id,carrierId,carrierPickupPointId,name,city,street", 
        defaultCurrency: "CZK"
    }

    return (
        <section className={styles.section}>
            <h2>Zasilkovna</h2>
             <div>


            <button className="packeta-selector-open" onClick={() => {Packeta.Widget.pick(packetaApiKey, showSelectedPickupPoint, packetaOptions)}}>{choose_point}</button>    
            <div className="packeta-selector-value"></div>
            </div>
        </section>
    )

}

export default Zasilkovna