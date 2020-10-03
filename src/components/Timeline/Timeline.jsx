import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css";

class TimelineIndicator extends Component {
  render() {
    const events = [
      {
        "date": "03/10/2020",
        "event": " Protestas Protestas Protestas Protestas<a href=\"https://www.protestas.lt\">data 20 Septembre 2020</a>"
      },
      {
        "date": "03/10/2020",
        "event": " Protestas Protestas Protestas Protestas<a href=\"https://www.protestas.lt\">data 20 Septembre 2020</a>"
      },{
        "date": "03/10/2020",
        "event": " Protestas Protestas Protestas Protestas<a href=\"https://www.protestas.lt\">data 20 Septembre 2020</a>"
      },{
        "date": "03/10/2020",
        "event": " Protestas Protestas Protestas Protestas<a href=\"https://www.protestas.lt\">data 20 Septembre 2020</a>"
      },{
        "date": "03/10/2020",
        "event": " Protestas Protestas Protestas Protestas<a href=\"https://www.protestas.lt\">data 20 Septembre 2020</a>"
      },{
        "date": "03/10/2020",
        "event": " Protestas Protestas Protestas Protestas<a href=\"https://www.protestas.lt\">data 20 Septembre 2020</a>"
      },{
        "date": "03/10/2020",
        "event": " Protestas Protestas Protestas Protestas<a href=\"https://www.protestas.lt\">data 20 Septembre 2020</a>"
      },{
        "date": "03/10/2020",
        "event": " Protestas Protestas Protestas Protestas<a href=\"https://www.protestas.lt\">data 20 Septembre 2020</a>"
      },{
        "date": "03/10/2020",
        "event": " Protestas Protestas Protestas Protestas<a href=\"https://www.protestas.lt\">data 20 Septembre 2020</a>"
      },{
        "date": "03/10/2020",
        "event": " Protestas Protestas Protestas Protestas<a href=\"https://www.protestas.lt\">data 20 Septembre 2020</a>"
      },{
        "date": "03/10/2020",
        "event": " Protestas Protestas Protestas Protestas<a href=\"https://www.protestas.lt\">data 20 Septembre 2020</a>"
      },{
        "date": "03/10/2020",
        "event": " Protestas Protestas Protestas Protestas<a href=\"https://www.protestas.lt\">data 20 Septembre 2020</a>"
      },{
        "date": "03/10/2020",
        "event": " Protestas Protestas Protestas Protestas<a href=\"https://www.protestas.lt\">data 20 Septembre 2020</a>"
      },{
        "date": "03/10/2020",
        "event": " Protestas Protestas Protestas Protestas<a href=\"https://www.protestas.lt\">data 20 Septembre 2020</a>"
      },
    ];

    return (
      <div
        className="App"
        style={{ background: "#333", fontFamily: "Trebuchet Ms" }}
      >
        <h1>Timeline</h1>
        <VerticalTimeline>
          {events.map(event => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date={event.date}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            >
              <h3
                className="vertical-timeline-element-title"
                dangerouslySetInnerHTML={{ __html: event.event }}
              />
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    );
  }
}

export default TimelineIndicator;
