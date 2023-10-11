import Menu from './Navbar'

export default function Contact(){
    return(
        <>
            <div className='contact-me' id='contact'>
                <h2>Me contacter</h2>
                <form action="">
                    <label>E-mail</label>
                    <input type='e-mail'/>
                    <label>Objet</label>
                    <input type='text'/>
                    <label>Message</label>
                    <textarea></textarea>
                    <button>Envoyer</button>
                </form>
                <p className='cr'><span class="copyright-text">&copy; 2023 TSILAVO Miharivelo Billy. Tous droits réservés.</span></p>
            </div>
        </>
    )
}