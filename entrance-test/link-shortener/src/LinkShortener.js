import { useState } from 'react';
import axios from 'axios';

const BASE_URL = "https://api.shrtco.de/v2";

const LinkShortener = () => {
    const [input, setInput] = useState("");
    const [domain, setDomain] = useState("shrtco.de");
    const [isLoading, setIsLoading] = useState(false);
    const [isValidLink, setIsValidLink] = useState(true);
    const [link, setLink] = useState("");

    const getLinkInput = (event) => {
        setInput(event.target.value);
    };

    const getDomain = (event) => {
        setDomain(event.target.value);
    };

    const shortenLink = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(`${BASE_URL}/shorten?url=${input}`);
            if (!response?.data.ok) {
                setIsValidLink(false);
            }
            else {
                setLink(`${domain}/${response?.data?.result?.code}`);
                setIsValidLink(true);
            }
            setIsLoading(false);
            setInput("");
        } catch (e) {
            setIsValidLink(false);
            console.error(e);
        }
    };

    return (
        <div className="link-shortener">
            <h1 className="title">Link Shortener</h1>
            <div className="input">
                <p>Enter your link: </p>
                <input placeholder="example.com" value={input} onChange={getLinkInput} />
                <button onClick={shortenLink}>{isLoading ? "Loading..." : "Get shortened link"}</button>
            </div>
            <div className="choose-domain">
                <p>Short domain:</p>
                <input type="radio" id="domain1" name="domain" value="shrtco.de" onChange={getDomain} defaultChecked />
                <label htmlFor="domain1">shrtco.de</label>
                <input type="radio" id="domain2" name="domain" value="9qr.de" onChange={getDomain} />
                <label htmlFor="domain2">9qr.de</label>
                <input type="radio" id="domain3" name="domain" value="shiny.link" onChange={getDomain} />
                <label htmlFor="domain3">shiny.link</label>
            </div>
            {(!isValidLink) && <p className="error"><strong>Error - Please enter a valid link</strong></p>}
            <p className="description">With this free Link Shortener you can make Links shorter and easier to remember. Just enter a Link into the form and click on the above Button to generate a short Link. When visiting the short-Link, the short-Link will immediately redirect you to the long Link.</p>
            {(link !== "") && <div className="result">
                <p>Link gererated! Your shortened link: </p>
                <h2>{link}</h2>
            </div>}
        </div>
    );
};

export default LinkShortener;