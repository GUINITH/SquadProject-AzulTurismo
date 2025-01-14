import React, { useState } from 'react'
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/es/styles-compiled.css";
import styles from "./CreditCard.module.css";

export default function Card() {

    const data = {
        cvc: "",
        expiry: "",
        focus: "",
        name: "",
        number: "",
        cpf: "",
      };
    
      const [cardDetails, setCardDetails] = useState(data);
    
      const handleInputFocus = (e) => {
        setCardDetails({ ...cardDetails, focus: e.target.name });
      };
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCardDetails({ ...cardDetails, [name]: value });
      };
    
      return (
        <div className={styles.cardContainer}>
          <Cards
            cvc={cardDetails.cvc}
            expiry={cardDetails.expiry}
            focused={cardDetails.focus}
            name={cardDetails.name}
            number={cardDetails.number}
            cpf={cardDetails.cpf}
            placeholders={{
              name: 'SEU NOME AQUI',
            }}
          />
          <div>
            <form className={styles.cardForm}>
              <input
                type="number"
                name="number"
                placeholder="---- ---- ---- ----" 
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                value={cardDetails.number}
              />
              <div className={styles.mainContent}>
              <input
                type="text"
                name="name"
                placeholder="Titular do Cartão"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                value={cardDetails.name}
              />
              <input
                  type="text"
                  name="expiry"
                  placeholder="MM/AA"
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  value={cardDetails.expiry}
                  maxLength={4}
                />
              </div>
              <div className={styles.bottom}>
                <input
                  type="tel"
                  name="CPF"
                  placeholder="CPF DO TITULAR"
                  maxLength={11}
                />
                <input
                  type="tel"
                  name="cvc"
                  placeholder="CVC"
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  value={cardDetails.cvc}
                  maxLength={3}
                />
              </div>
            </form>
          </div>
        </div>
  )
}
