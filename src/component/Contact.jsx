

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
                <div className='social-network'>
                    <div>
                        <span>Linkedin : <a href='https://www.linkedin.com/in/billy-tsilavo-5a8954212'>TSILAVO Miharivelo Billy</a></span><br/>
                        <span>Gmail : <span href=''>billy.tasks@gmail.com</span></span>
                    </div>
                    <div>
                        <span>Facebook : <a href='https://web.facebook.com/billy.kmc'>Miharivelo Billy</a></span><br/>
                        <span>Tél : <span href=''>+261 34 10 887 88</span></span>
                    </div>
                </div>
                <p className='cr'><span class="copyright-text">&copy; 2024 TSILAVO Miharivelo Billy. Tous droits réservés.</span></p>
            </div>
        </>
    )
}