import { useState } from 'react';

export const Live = () => {
    const [language, setLanguage] = useState('en'); // 'en' for English, 'fr' for French

    const translateText = (text) => {
        const translations = {
            "Home": { "en": "Home", "fr": "Accueil" },
            "About": { "en": "About", "fr": "À propos" },
            "Contact": { "en": "Contact", "fr": "Contact" },
        }
        return translations[text][language] || text;
    }

    const handleClick = () => {
        setLanguage(prevLang => prevLang === 'en' ? 'fr' : 'en');
    }

    return (
        <>
            <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-3">
                <ul>
                    <li><a href="/">{translateText("Home")}</a></li>
                    <li><a href="/about">{translateText("About")}</a></li>
                    <li><a href="/contact">{translateText("Contact")}</a></li>
                </ul>
                <button onClick={handleClick}>Translate</button>
            </nav>
        </>
    )
}