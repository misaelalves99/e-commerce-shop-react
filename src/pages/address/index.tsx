// src/pages/address/index.tsx

import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "./Address.module.css";
import { AddressData } from "../../types/AddressData";

const Address: React.FC = () => {
  const [address, setAddress] = useState<AddressData>({
    street: "",
    neighborhood: "",
    city: "",
    state: "",
    postalCode: "",
    complement: "",
  });

  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (
      !address.street ||
      !address.neighborhood ||
      !address.city ||
      !address.state ||
      !address.postalCode
    ) {
      setErrorMessage("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    localStorage.setItem("address", JSON.stringify(address));
    alert("Endereço salvo com sucesso!");
    setErrorMessage("");
  };

  return (
    <div className={styles.addressContainer}>
      <h2 className={styles.addressTitle}>Dados de Endereço</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="street">Logradouro</label>
          <input
            id="street"
            type="text"
            name="street"
            value={address.street}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="neighborhood">Bairro</label>
          <input
            id="neighborhood"
            type="text"
            name="neighborhood"
            value={address.neighborhood}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="city">Cidade</label>
          <input
            id="city"
            type="text"
            name="city"
            value={address.city}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="state">Estado</label>
          <input
            id="state"
            type="text"
            name="state"
            value={address.state}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="postalCode">CEP</label>
          <input
            id="postalCode"
            type="text"
            name="postalCode"
            value={address.postalCode}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="complement">Complemento</label>
          <input
            id="complement"
            type="text"
            name="complement"
            value={address.complement}
            onChange={handleChange}
          />
        </div>

        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}

        <button type="submit" className={styles.submitButton}>
          Salvar Endereço
        </button>
      </form>
    </div>
  );
};

export default Address;
