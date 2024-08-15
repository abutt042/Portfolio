import React from "react"
import './Experience.css';
const Experience = () => {
    return (
        <div className="container" id='client'>
            <main class="row">
                <section className="col">

                    <header className="title">
                        <h2>EXPERIENCE</h2>

                    </header>


                    <div className="contents">
                        
                        <div className="box">
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop:'2%' }}>
                                <h4>May 2024 - continue </h4>
                                <h4>Unitech Digital Studio </h4>


                            </div>

                            <h3> Front End Web Developer</h3>
                            <p> Creating responsive and visually appealing user interfaces using HTML, CSS, and JavaScript. This includes implementing web designs, ensuring cross-browser compatibility, and optimizing for performance.</p>
                            <p> Working closely with user experience (UX) and user interface (UI) designers to translate design mockups and wireframes into functional and interactive web pages.</p>
                            <p> Writing clean, maintainable, and scalable code while optimizing the performance of web applications. This includes conducting code reviews, writing unit tests, and using tools for debugging and performance monitoring.</p>
                            <p>Using version control systems like Git to manage and track changes in the codebase. This involves collaborating with other developers and maintaining a clear project history.</p>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop:'2%' }}>
                                <h4>Nov 2022- May 2024 </h4>
                                <h4>Power Information Technology Company </h4>


                            </div>

                            <h3> Front End Web Developer</h3>
                            <p> Analyzing client requirements and developing software solutions that meet those requirements.</p>
                            <p> Designing, developing, testing, maintaining, and supporting software solutions using variety of technology stacks JavaScript,HTML, React, CSS, Material UI that seamlessly integrate with other systems.</p>
                            <p> Designing and developing responsive user interfaces that are compatible across multiple screen resolutions and browsers.</p>
                            <p> Writing clean, maintainable and modular code following best software development practices</p>
                        </div>

                        {/* <div className="box">

                            <h4>2016-2022</h4>
                            <h3> Bec</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis fuga alias quo nobis voluptate numquam explicabo impedit officia? Temporibus repellendus debitis nostrum nesciunt quo minus commodi, quasi distinctio mollitia vel!</p>

                        </div>
                        <div className="box">

                            <h4>2016-2022</h4>
                            <h3> High School</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis fuga alias quo nobis voluptate numquam explicabo impedit officia? Temporibus repellendus debitis nostrum nesciunt quo minus commodi, quasi distinctio mollitia vel!</p>

                        </div> */}
                    </div>
                </section>
                <section className="col">

                    <header className="title">
                        <h2>Professional Skills</h2>

                    </header>


                    <div className="contents">
                        <div className="box">

<div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-evenly'}}>
                            <button>React</button>
                            <button>Es6</button>

                            <button>Html5</button>

                            <button>SCSS</button>

                            <button>JavaScript</button>

                            <button>Postman</button>

                            <button>Git</button>

                            <button>NPM</button>
                            <button>Material UI</button>
                            <button>JSON</button>
                            <button>NPM</button>
                            <button>Bootstrap</button>
                            <button>Camunda Modeler</button>

                            </div>
                        </div>
                        {/* <div className="box">

                            <h4>2016-2022</h4>
                            <h3> High School</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis fuga alias quo nobis voluptate numquam explicabo impedit officia? Temporibus repellendus debitis nostrum nesciunt quo minus commodi, quasi distinctio mollitia vel!</p>

                        </div> */}

                    </div>
                </section>
            </main>
        </div>
    )
};

export default Experience;
