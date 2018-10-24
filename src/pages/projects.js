import React, { Component } from 'react';
import { Badge, Grid, Row, Col } from 'react-bootstrap';
import ProjectBlurb from '../components/projectBlurb';

class Projects extends Component {
    render(){
        return(
            <div className="pageContentContainer">
                <div>
                    <h2>Professional</h2>
                    <Grid>
                        <Row>
                            <Col sm={6} md={6}>
                                <ProjectBlurb
                                    className="projectBlurb"
                                    title="Data Prep Studio"
                                    description={
                                        <p>Datawatch's modern data preparation tool.  DPS is everything people love about Monarch, but with a far more approachable user experience.  
                                            DPS specializes in capturing data, cleansing and normalizing it, storing that process as a workflow, and then reapplying 
                                            that workflow to next week's data. I am currently the development lead for this product.</p>
                                    }
                                    badges={
                                        <div>
                                            <Badge>XAML</Badge>
                                            <Badge>C#</Badge>
                                        </div>
                                    }
                                    buttonTitle="Website"
                                    buttonClick={() => this.buttonClickHandler("https://docs.datawatch.com/dps/")}/>
                            </Col>
                            <Col sm={6} md={6}>
                                <ProjectBlurb
                                    className="projectBlurb"
                                    title="Panopticon"
                                    description={
                                        <p>Datawatch's data visualization tool.  Following Datawatch's aquisition of Panopticon Software I moved to Stockholm, Sweden
                                            for three months in order to build relationships and help integrate their team into our organization.  During my time there
                                            I worked on various bits of the front end code which included inventing a new gesture for placing a visualization onto the canvas.
                                        </p>
                                    }
                                    badges={
                                        <div>
                                            <Badge>XAML</Badge>
                                            <Badge>C#</Badge>
                                        </div>
                                    }
                                    buttonTitle="Website"
                                    buttonClick={() => this.buttonClickHandler("https://www.datawatch.com/our-platform/panopticon/")}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6} md={6}>
                                <ProjectBlurb
                                    className="projectBlurb"
                                    title="Monarch"
                                    description={
                                        <p>Datawatch's legacy data preparation tool.  I worked on parts of Monarch 11 towards the end of its life cycle and helped 
                                            develop key portions of Monarch 12 which was nearly a complete rewrite.  Monarch is packaged alongside Data Prep Studio 
                                            as part of Monarch Complete.</p>
                                    }
                                    badges={
                                        <div>
                                            <Badge>XAML</Badge>
                                            <Badge>C#</Badge>
                                        </div>
                                    }
                                    buttonTitle="Website"
                                    buttonClick={() => this.buttonClickHandler("https://www.datawatch.com/our-platform/monarch/")}/>
                            </Col>
                            <Col sm={6} md={6}>
                                <ProjectBlurb
                                    className="projectBlurb"
                                    title="Table Extractor"
                                    description={
                                        <p>A tool for automatically discovering tables within PDF files, which can then be exported to Data Prep Studio.  The algorithms in 
                                            Table Extractor have since been patented as part of US Patent: <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%252Fnetahtml%252FPTO%252Fsrchnum.htm&r=1&f=G&l=50&s1=9703766.PN.&OS=PN/9703766&RS=PN/9703766">9703766</a>.  
                                            I am also the development lead for this product.</p>
                                    }
                                    badges={
                                        <div>
                                            <Badge>XAML</Badge>
                                            <Badge>C#</Badge>
                                        </div>
                                    }
                                    buttonTitle="Website"
                                    buttonClick={() => this.buttonClickHandler("https://www.datawatch.com/our-platform/table-extractor/")}/>
                            </Col>
                        </Row>
                    </Grid>
                </div>
                <div style={{marginTop:40}}>
                    <h2>Hobby</h2>
                    <Grid>
                        <Row>
                            <Col sm={6} md={6}>
                                <ProjectBlurb
                                    className="projectBlurb" 
                                    title="ArkanoidJS" 
                                    description={
                                        <p>Arkanoid-esque game I'm developing to learn the ins and outs of vanilla JavaScript.</p>
                                    }
                                    badges={
                                        <div>
                                            <Badge>JavaScript</Badge>
                                            <Badge>HTML</Badge>
                                            <Badge>CSS</Badge>
                                        </div>
                                    }
                                    buttonTitle="Play"
                                    buttonClick={() => this.buttonClickHandler("https://austinspears.github.io/Arkanoid-JS/")
                                    }
                                />
                            </Col>
                            <Col sm={6} md={6}>                
                                <ProjectBlurb
                                    className="projectBlurb" 
                                    title="Personal Website" 
                                    description={
                                        <p>I developed this website as a way to learn more about React, CSS, and HTML.</p>
                                    }
                                    badges={
                                        <div>
                                            <Badge>React</Badge>
                                            <Badge>React-Bootstrap</Badge>
                                            <Badge>HTML</Badge>
                                            <Badge>CSS</Badge>
                                        </div>
                                    }
                                    buttonTitle="Source"
                                    buttonClick={() => this.buttonClickHandler("https://github.com/AustinSpears/about-me")
                                    }/>
                            </Col>
                        </Row>
                        <Row>
                        <Col sm={6} md={6}>
                                <ProjectBlurb
                                    className="projectBlurb" 
                                    title="Level Editor - ArkanoidJS" 
                                    description={
                                        <p>A WPF application I developed to quickly build levels for my ArkanoidJS game.</p>
                                    }
                                    badges={
                                        <div>
                                            <Badge>XAML</Badge>
                                            <Badge>C#</Badge>
                                            <Badge>MVVM</Badge>
                                        </div>
                                    }
                                    buttonTitle="Source"
                                    buttonClick={() => this.buttonClickHandler("https://github.com/AustinSpears/ArkanoidJS-LevelEditor-WPF")
                                    }
                                />
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        );
    }

    buttonClickHandler(url)
    {
        var win = window.open(url);
        win.focus();
    }
}

export default Projects;