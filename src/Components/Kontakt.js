import React from 'react'
import emailjs from 'emailjs-com'
import swal from 'sweetalert'
import styled from 'styled-components'

function Kontakt() {

    
    

      function odoslane(){
          swal({
              title: 'Výborne.',
              text: 'Ďakujeme za Vašu správu, čoskoro sa Vám ozveme.',
              icon: 'success',
              button: 'Späť',
          })
      }

      function neodoslane(){
          swal({
              title: 'Ups...',
              text: 'Niečo sa pokazilo a správu sa nedalo odoslať.',
              icon: 'error',
              button: 'Späť',
          })
      }

      function nevyplnene(){
          swal({
              title: 'Ups...',
              text: 'Treba vyplniť všetky polia.',
              icon: 'error',
              button: 'Späť',
          })
      }

      const Section = styled.section`
        color: #000;
        padding: 100px;
        background-color: #d5b37d;
    `

    const KontaktRow = styled.div`
        align-items: center;
        display: flex;
        margin-right: 15px;
        margin-bottom: 15px;
        margin-left: 15px;
        flex-wrap: wrap;
        align-content: stretch;

        @media screen and (max-width: 768px){
            flex-direction: column;
            width: '50%';
            margin: 'auto';
            }    
    `

    const KontaktCol = styled.div`
        margin-bottom: 15px;
        padding-right: 15px;
        padding-left: 15px;
        flex: 1;
        max-width: 50%;
        flex-basis: 50%;
    `

    const KontaktTextWrap = styled.div`
        max-width: 540px;
        padding-top: 0;
        padding-bottom: 60px;
    `

    const TopLine = styled.h1`
        color: #000;
        font-size: 16px;
        line-height: 16px;
        font-weight: 700;
        letter-spacing: 1.4px;
        text-transform: uppercase;
        margin-bottom: 16px;
    `

    const Heading = styled.h1`
        margin-bottom: 24px;
        font-size: 48px;
        line-height: 1.1;
        font-weight: 600;
        color: #000;
    `

    const Adresa = styled.address`
        max-width: 440px;
        margin-bottom: 35px;
        font-size: 18px;
        line-height: 24px;
        a {
            color: #000;
            text-decoration: none;
            transition: all ease-out 0.3s;
            &:hover{
                font-size: 19px;
                color: brown;
            }
        }
    `
    const Inputs = styled.div`
        width: '50%';
    `

    const Formular = styled.form`
        max-width: 100%;
        margin-top: 0;
        margin-right: 0;
        padding-right: 0;
        display: inline-block;
    `

    const Polia = styled.input`
        width: 100%;
        color: #dcdcdc;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: none;
        background-color: transparent;
        border-bottom: 3px solid #dcdcdc;
        box-sizing: border-box;
        transition: all 0.5s ease-in-out;
        &:focus {
            outline: none;
            border-bottom: 3px solid #000;
        }
    `

    const Textarea = styled.textarea`
        width: 100%;
        color: #dcdcdc;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: none;
        background-color: transparent;
        border-bottom: 3px solid #dcdcdc;
        box-sizing: border-box;
        transition: all 0.5s ease-in-out;
        &:focus {
            outline: none;
            border-bottom: 3px solid #000;
        }
    `

    const Odoslat = styled.input`
        width: '100%';
        padding: 12px 64px;
        font-size: 20px;
        background-color: #fff;
        border: none;
        &:hover{
            color: #fff;
            background-color: brown;
            transition: all 0.2s ease-out;
        }
    `

    return (
        <div>
            <Section name='/kontakt'>
                <div style={{marginRight: 50}}>
                    <KontaktRow>
                        <KontaktCol>
                            <KontaktTextWrap >
                                <TopLine>
                                    Stavba rodinných domov
                                </TopLine>
                                <Heading >Kontakt</Heading>
                                    <Adresa>
                                    <h2>Sídlo:</h2>
                                    Nazov s.r.o.<br/>
                                    Ulica<br/>
                                    PSC Mesto<br/> <br/>
                                    <h2>Predajné miesto:</h2>
                                    Ulica<br/>
                                    PSC Mesto<br/>
                                    <a href='mailto:'>email</a><br/>
                                    <a href='tel:'>Telefonne cislo</a><br/>
                                    </Adresa>
                            </KontaktTextWrap>
                        </KontaktCol>
                        <KontaktCol>
                            <Inputs>
                                <Inputs>
                                    <Formular onSubmit={sendEmail}>
                                        <label>Predmet</label>
                                        <Polia type="text" name="predmet" required />
                                        <label>Meno a Priezvisko</label>
                                        <Polia type="text" name="meno" required />
                                        <label>Email</label>
                                        <Polia type="email" name="email" required />
                                        <label>Správa</label>
                                        <Textarea name="sprava" required/>
                                        <Odoslat type="submit" value="Odoslať"/>
                                    </Formular>
                                </Inputs>
                            </Inputs>
                        </KontaktCol>
                    </KontaktRow>
                </div>
            </Section>
        </div>
    )

    function sendEmail(e) {
        e.preventDefault();
        
        emailjs.sendForm('service_q6d0s3m', 'skladany.sktemplate', e.target, 'user_7GDQxbhCqcE2KSYfTHdI1')
          .then(() => {
              odoslane()
          }, () => {
              neodoslane()
          });
          e.target.reset()
      }
    }

export default Kontakt