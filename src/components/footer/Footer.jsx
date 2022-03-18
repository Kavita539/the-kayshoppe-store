import "./footer.css";

const Footer = () => {
    return(

        <footer class="footer">
                <ul class="inline-styled-list footer-list">
                    <li>
                        <a class="footer-links" href="https://github.com/Kavita539" target="_blank"><i
                                class='bx bxl-github'></i></a>
                    </li>
                    <li>
                        <a class="footer-links" href="https://twitter.com/KavitaP_03" target="_blank"><i
                                class="fab fa-twitter"></i></a>
                    </li>
                    <li>
                        <a class="footer-links" href="https://www.linkedin.com/in/kavita-pathak03/" target="_blank"><i
                                class="fab fa-linkedin"></i></a>
                    </li>
                </ul>
                <p>© 2022 KayyShoppe</p>
            </footer>

    );
};

export { Footer };