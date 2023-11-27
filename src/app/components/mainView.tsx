'use client';
import Carousel from '@/app/components/carousel'
import React, { useCallback, useEffect, useState } from "react";

export default function MainView() {
    const [images, setImages] = useState();

    const getImagesFromStorage = useCallback(() => {}, [])
    const slide = [
        {
            id: '1',
            title: "Apresentação",
            images: [
                {
                    img: "https://firebasestorage.googleapis.com/v0/b/portfolio-9b4f7.appspot.com/o/Apresenta%C3%A7%C3%A3o%2FApresenta%C3%A7%C3%A3o.mp4?alt=media&token=17fc4ae8-eb78-43d7-a861-66d839273841"
                },
            ]
        },
        {
            id: '2',
            title: "Automóveis",
            images: [
                {
                    img: "https://firebasestorage.googleapis.com/v0/b/portfolio-9b4f7.appspot.com/o/Autom%C3%B3veis%20de%20Luxo%2FEstetica%20automotiva.mp4?alt=media&token=ec87a7bd-6ca7-4e2f-aae5-65805cc47a4f"
                },
            ]
        },
    ];

    const profile = 'https://firebasestorage.googleapis.com/v0/b/portfolio-9b4f7.appspot.com/o/Perfil%2FWhatsApp%20Image%202023-10-12%20at%2022.38.15.jpeg?alt=media&token=c5e37185-97ad-4899-b064-0e242a51da2a&_gl=1*tug2n8*_ga*ODU1MDQyNjgyLjE2OTU5NjM2MjQ.*_ga_CW55HF8NVT*MTY5NzE1OTg0Mi40LjEuMTY5NzE2MTIyOC40Mi4wLjA.'

    return (
        <main>
            <section id='section1' className='bg-gray-50 flex flex-col'>
                <img className='w-screen 2xsm:h-[200px] lg:h-screen' src='/carro.gif' />
            </section>

            <section className="bg-purpledeep flex flex-col items-center" id="section2">
                <div className="p-7 mt-12 mb-6">
                    <p className="text-white text-2xl font-sans">Trabalhos</p>
                </div>

                {
                    slide.map((s) => (
                        <div className="flex flex-col 2xsm:w-[320px] xsm:w-[300px] sm:w-[400px] md:w-[400px] lg:w-[800px] items-center" key={s.id}>
                            <div className="text-gray-500 text-lg mb-3 font-bold font-serif">{s.title}</div>
                            <Carousel images={s.images}></Carousel>
                        </div>
                    ))
                }

            </section>

            <section className='bg-purpledeep flex flex-row items-start justify-center p-8' id="section4">
                <img src={profile} className='w-64 h-64 rounded mr-6'/>

                <div className='flex flex-col items-start max-w-3xl'>
                    <p className='text-3xl font-sans'>
                        Guilherme Alcantara
                    </p>

                    <p className='text-gray-400 text-start font-serif text-lg'>
                        Amante da MPB, espírito boêmio inquieto e detentor de um humor peculiar.
                    </p>
                    <p className='text-gray-400 text-start font-serif text-lg'>
                        Minha verdadeira paixão é dar vida às histórias por meio de produções cinematográficas que impactam visualmente. Seja por meio da edição de vídeos ou das minhas filmagens, explorando diferentes ângulos de forma ousada, meu objetivo constante é ultrapassar as barreiras do possível, criando obras de arte que cativam o público e deixam uma impressão duradoura.
                    </p>
                    <p className='text-gray-400 text-start font-serif text-lg'>
                        Sempre busco entregar o meu melhor, não apenas o possível. Isso é o que você procura?
                    </p>
                </div>
            </section>

            <section className="bg-gray-950 flex flex-col items-center pb-8" id="section3">
                
                <div className="border-b-2 p-7 mb-6">
                    <span className="text-white text-2xl">Contato</span>
                </div>

                <div className='flex flex-row gap-8 bg-purpledeep p-8 mt-8 rounded shadow'>
                    <a href='https://www.instagram.com/guilhermezando_/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==' className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48">
                            <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fd5"></stop><stop offset=".328" stopColor="#ff543f"></stop><stop offset=".348" stopColor="#fc5245"></stop><stop offset=".504" stopColor="#e64771"></stop><stop offset=".643" stopColor="#d53e91"></stop><stop offset=".761" stopColor="#cc39a4"></stop><stop offset=".841" stopColor="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#4168c9"></stop><stop offset=".999" stopColor="#4168c9" stopOpacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
                        </svg>
                    </a>
                    <div className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48">
                            <linearGradient id="k87TA_gnBJ8uBlK4qfs8ia_AltfLkFSP7XN_gr1" x1="6.718" x2="35.097" y1="12.801" y2="41.18" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#dfe9f2"></stop><stop offset=".391" stopColor="#d6e0e9"></stop><stop offset="1" stopColor="#bfc8d1"></stop></linearGradient><path fill="url(#k87TA_gnBJ8uBlK4qfs8ia_AltfLkFSP7XN_gr1)" d="M37.848,9.86C34.073,6.083,29.052,4.002,23.709,4C12.693,4,3.727,12.962,3.722,23.979	c-0.001,3.367,0.849,6.685,2.461,9.622L3.598,43.04c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297	c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98	C43.698,18.656,41.621,13.636,37.848,9.86z"></path><linearGradient id="k87TA_gnBJ8uBlK4qfs8ib_AltfLkFSP7XN_gr2" x1="15.389" x2="28.863" y1="10.726" y2="39.265" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2ecc75"></stop><stop offset="1" stopColor="#0b964a"></stop></linearGradient><path fill="url(#k87TA_gnBJ8uBlK4qfs8ib_AltfLkFSP7XN_gr2)" d="M34.871,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774	c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006	c8.698,0,15.777-7.077,15.78-15.776C39.49,19.778,37.851,15.814,34.871,12.832z"></path><path d="M28.893,33.879c-0.995,0-2.354-0.254-5.087-1.331c-3.06-1.208-6.066-3.83-8.464-7.384l-0.077-0.113	c-0.642-0.857-2.132-3.107-2.132-5.5c0-2.58,1.288-3.953,1.838-4.54l0.085-0.091C15.815,14.089,16.709,14,17.058,14	c0.369,0.004,0.682,0,0.953,0.012c0.654,0.026,1.399,0.215,1.936,1.409l0,0c0.25,0.558,0.676,1.605,1.009,2.426	c0.213,0.527,0.386,0.955,0.439,1.069c0.294,0.586,0.308,1.167,0.036,1.714l-0.065,0.133c-0.128,0.262-0.261,0.533-0.544,0.863	l-0.235,0.282c-0.162,0.197-0.325,0.393-0.47,0.545c0.389,0.641,1.206,1.856,2.331,2.86c1.394,1.241,2.588,1.76,3.229,2.039	c0.127,0.055,0.233,0.102,0.317,0.142c0.405-0.47,1.072-1.271,1.302-1.614c0.77-1.156,1.877-0.755,2.24-0.622	c0.569,0.206,3.323,1.576,3.35,1.589l0.255,0.125c0.419,0.203,0.813,0.394,1.062,0.808c0.395,0.661,0.176,2.073-0.193,3.105	c-0.534,1.503-2.828,2.805-4.054,2.915l-0.226,0.024C29.465,33.855,29.196,33.879,28.893,33.879z M17.216,16	c-0.14,0-0.385-0.058-0.686,0.27l-0.101,0.109c-0.453,0.483-1.297,1.383-1.297,3.172c0,1.843,1.326,3.757,1.732,4.3	c0.027,0.036,0.071,0.101,0.135,0.194c2.175,3.223,4.853,5.582,7.541,6.642c3.384,1.335,4.253,1.234,4.956,1.151l0.278-0.03	c0.609-0.055,2.122-0.951,2.351-1.594c0.209-0.585,0.276-1.087,0.287-1.374c-0.044-0.021-0.092-0.043-0.143-0.067l-0.283-0.139	c-0.637-0.32-2.779-1.366-3.131-1.495c-0.442,0.608-1.262,1.565-1.479,1.814c-0.407,0.467-1.127,0.909-2.229,0.354	c-0.066-0.033-0.156-0.071-0.268-0.12c-0.691-0.301-2.13-0.926-3.763-2.38c-1.469-1.311-2.474-2.904-2.838-3.529	c-0.445-0.761-0.322-1.495,0.366-2.18c0.12-0.12,0.257-0.291,0.397-0.46l0.262-0.314c0.118-0.137,0.161-0.226,0.267-0.441	l0.035-0.071c-0.092-0.204-0.278-0.659-0.502-1.213c-0.323-0.797-0.736-1.815-0.979-2.357v0c-0.065-0.144-0.114-0.215-0.138-0.245	c0.005,0.015-0.029,0.016-0.058,0.014C17.706,16,17.463,16,17.216,16z M32.407,28.615L32.407,28.615L32.407,28.615z M19.642,19.736	L19.642,19.736L19.642,19.736z" opacity=".05"></path><path d="M28.889,33.384c-0.846,0-2.155-0.22-4.899-1.302c-2.967-1.17-5.891-3.727-8.233-7.198l-0.087-0.128	c-0.616-0.822-2.037-2.962-2.037-5.206c0-2.382,1.193-3.654,1.703-4.198l0.089-0.096c0.625-0.683,1.351-0.756,1.634-0.756	c0.377,0.003,0.667,0,0.931,0.012c0.492,0.02,1.057,0.124,1.502,1.114l0,0c0.249,0.554,0.671,1.594,1.001,2.409	c0.225,0.555,0.405,1.002,0.452,1.097c0.082,0.165,0.338,0.674,0.039,1.275l-0.067,0.136c-0.125,0.255-0.233,0.476-0.475,0.758	L20.2,21.59c-0.173,0.21-0.346,0.419-0.496,0.569c-0.216,0.215-0.216,0.215-0.13,0.362c0.328,0.563,1.232,1.998,2.541,3.165	c1.453,1.295,2.696,1.834,3.363,2.124c0.144,0.062,0.259,0.113,0.344,0.156c0.293,0.146,0.323,0.116,0.427-0.002	c0.288-0.328,1.168-1.364,1.463-1.807c0.554-0.83,1.269-0.57,1.654-0.431c0.506,0.184,3.039,1.437,3.296,1.566l0.262,0.128	c0.38,0.184,0.68,0.329,0.852,0.614c0.254,0.426,0.149,1.603-0.235,2.681c-0.488,1.371-2.646,2.497-3.628,2.585l-0.239,0.026	C29.441,33.354,29.196,33.384,28.889,33.384z M17.201,15.5c-0.026,0-0.052,0-0.078,0c-0.183,0-0.595,0.031-0.962,0.432l-0.097,0.104	c-0.465,0.496-1.432,1.528-1.432,3.514c0,1.943,1.281,3.864,1.832,4.6c0.025,0.033,0.064,0.09,0.121,0.174	c2.231,3.306,4.991,5.73,7.772,6.828c3.505,1.382,4.445,1.271,5.197,1.183l0.267-0.029c0.693-0.062,2.451-1.013,2.776-1.925	c0.333-0.932,0.347-1.71,0.296-1.877c0.007,0.006-0.232-0.098-0.405-0.182l-0.276-0.136c-0.623-0.313-2.806-1.381-3.188-1.52	c-0.36-0.13-0.361-0.133-0.48,0.046c-0.349,0.521-1.32,1.657-1.542,1.91c-0.642,0.735-1.384,0.359-1.629,0.236	c-0.072-0.036-0.171-0.078-0.293-0.131c-0.668-0.291-2.057-0.895-3.63-2.296c-1.416-1.262-2.387-2.803-2.739-3.407	c-0.476-0.814,0.059-1.347,0.287-1.574c0.13-0.13,0.28-0.313,0.431-0.497l0.255-0.306c0.159-0.186,0.226-0.322,0.336-0.547	l0.07-0.143c0.049-0.098,0.058-0.189-0.04-0.383c-0.052-0.104-0.245-0.578-0.483-1.167c-0.326-0.803-0.741-1.829-0.987-2.374l0,0	c-0.229-0.509-0.363-0.515-0.632-0.525C17.717,15.5,17.461,15.5,17.201,15.5z" opacity=".07"></path><path fill="#fff" fillRule="evenodd" d="M19.035,15.831c-0.355-0.79-0.729-0.806-1.068-0.82	C17.69,14.999,17.374,15,17.058,15s-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956s1.7,4.59,1.937,4.906	c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255	c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543	c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119	c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968	c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831	C20.379,19.115,19.457,16.769,19.035,15.831z" clipRule="evenodd"></path>
                        </svg>
                    </div>
                    <div className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48">
                            <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                        </svg>
                    </div>
                    <div className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48">
                            <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
                        </svg>
                    </div>
                </div>
            </section>
        </main>
    );
}