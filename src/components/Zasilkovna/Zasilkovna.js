import React, { useState, useEffect } from "react"
import useTranslations from "../useTranslations"
import * as styles from "./_Zasilkovna.module.scss"
import Form from "../Form/Form"

const Zasilkovna = () => {

    const { 
        choose_point_h2,
        choose_point_btn
        
     } = useTranslations()

    const [ Packeta, setPacketa ] = useState('')
    const [ point, setPoint ] = useState('')
    const [ isComplited, setIsComplited ] = useState(false)

    useEffect(() => {
        setPacketa(window.Packeta)
        setIsComplited(false)
    })

    const packetaApiKey = 'a27ac5f8cac4d754'

    const showSelectedPickupPoint = (point) => {
        const saveElement = document.querySelector(".packeta-selector-value");
        saveElement.innerText = '';
        if (point) {
          console.log("Selected point", point);
          saveElement.innerText = "Address: " + `Point #${point.id}, ${point.city}, ${point.street}, PSČ: ${point.zip}, ${point.url}`; 
          setPoint(point)
        }
    }

    const packetaOptions = {
        country: "cz", 
        valueFormat: "\'Packeta\',id,carrierId,carrierPickupPointId,name,city,street", 
        defaultCurrency: "CZK"
    }

    useEffect(() => {
        const saveElement = document.querySelector(".packeta-selector-value")
        saveElement.innerText = ''
        setPoint('')
    }, [isComplited])

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2>{choose_point_h2}</h2>
            
                <button className="packeta-selector-open" onClick={() => {Packeta.Widget.pick(packetaApiKey, showSelectedPickupPoint, packetaOptions)}}>{choose_point_btn}</button>    
                <div style={{margin: "20px 0"}} className="packeta-selector-value"></div>

                <div style={point ? {display: "block"} : {display: "none"}}>
                    <Form point={point} setIsComplited={setIsComplited} />
                </div>

            </div>
        </section>
    )
}

export default Zasilkovna