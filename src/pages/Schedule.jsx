import React from "react";
import "./Schedule.css";
import { href } from "react-router-dom";

// If you deploy under a base path (e.g., GitHub Pages), BASE_URL helps build correct links
const base = import.meta.env.BASE_URL || "/";

const schedule = [
  { w: 1, date: "8/28/25", topic: "Course introduction and programming environment setup",
    // multiple labs → different HTMLs
    lab: [
      { label: "1.1 Environment setup and Python basics", href: `${base}labs/week-1-intro-python/week-1A-python-basics.html` },
      { label: "1.2 More about Python", href: `${base}labs/week-1-intro-python/week-1B-more-about-python.html` },
    ],
  },
  { w: 2, date: "9/4/25", topic: "Data Visualization Fundamentals",
    // if you just give strings, we’ll auto-map to lab{ww}-{index}.html
    lab: [ 
      { label: "2.1 Exploratory data science", href: `${base}labs/week-2-data-viz-fundamentals/week-2A-exploratory-data-science-Python.html` }, 
      { label: "2.2 data visualization fundamentals-A", href: `${base}labs/week-2-data-viz-fundamentals/week-2B1-data-visualization-fundamentals-A.html` }, 
      { label: "2.3 data visualization fundamentals-B", href: `${base}labs/week-2-data-viz-fundamentals/week-2B2-data-visualization-fundamentals-B.html` }
    ],
  },
  { w: 3, date: "9/11/25", topic: "More on Data Visualization and Intro to Vector Data & GeoPandas",
    // single string → auto-map to lab{ww}.html
    lab: [
      {label: "3.1 More about data visualization", href: `${base}labs/week-3-more-data-viz-geodata/week-3-more-data-viz.html`}, 
      {label: "3.2 Intro to GeoPandas and vector data", href: `${base}labs/week-3-more-data-viz-geodata/week3-geospatial-data-concepts.html`}
    ]
  },
  { w: 4, date: "9/18/25", 
    topic: "Geospatial data mapping", 
    lab: [
      {label: "4.1 More about geospatial data mapping", href: `${base}labs/week-4-spatial-data-mapping/week-4A-spatial-data-viz.html`},
      {label: "4.2 Interactive spatial data visualization", href: `${base}labs/week-4-spatial-data-mapping/week-4B-interactive-spatial-data-viz.html`}
    ]
  },
  { w: 5, date: "9/25/25", topic: "Raster data operations in Python", 
    lab: [
      {label: "5.1 Raster data operations", href: `${base}labs/week-5-raster-analysis/week-5A-raster-data.html`},
      {label: "5.2 Raster data analysis", href: `${base}labs/week-5-raster-analysis/week-5B-raster-analysis.html`}
    ]
  },
  { w: 6, date: "10/2/25", topic: "Advanced geospatial analysis", 
    lab: [
      {label: "6.1 Advanced geospatial analysis", href: `${base}labs/week-6-advanced-geospatial-analysis/week-6A-advanced-raster-analysis.html`},
      {label: "6.2 Zonal statistics", href: `${base}labs/week-6-advanced-geospatial-analysis/week-6B-spatial_fiona_shapely.html`}
    ]
  },
  { w: 7, date: "10/9/25", topic: "Fall break — No class", 
    lab: "—" },
  { w: 8, date: "10/16/25", topic: "Web Scraping (I)", 
    lab: "API, parse HTML, store data in database" },
  { w: 9, date: "10/23/25", topic: "Web Scraping (II)", 
    lab: "Scrape and analyze real data (e.g., GSV)" },
  { w: 10, date: "10/30/25", topic: "Analyzing & Visualizing Large Datasets; CensusAPI", 
    lab: "Visualize large raster and vector data" },
  { w: 11, date: "11/6/25", topic: "Web hosting: GitHub, Quarto, create web pages", 
    lab: "Publish notebooks & sites" },
  { w: 12, date: "11/13/25", topic: "Machine Learning (I)", 
    lab: "Predictive Modeling with scikit-learn" },
  { w: 13, date: "11/20/25", topic: "Machine Learning (II)", 
    lab: "Predictive Modeling with scikit-learn" },
  { w: 14, date: "11/27/25", topic: "Thanksgiving break — No class", 
    lab: "—" },
  { w: 15, date: "12/4/25", topic: "Final Project Presentations (last day of class)", 
    lab: "—" },
];

function LabCell({ item }) {
  const val = item.lab;
  const ww = String(item.w).padStart(2, "0");

  if (val === "—" || val == null) return <span>—</span>;

  // Explicit objects: {label, href}
  if (Array.isArray(val) && val.every(v => v && typeof v === "object")) {
    return (
      <ul className="lab-list">
        {val.map((lab, i) => (
          <li key={`${item.w}-labobj-${i}`}>
            <a href={lab.href} target="_blank" rel="noopener noreferrer">{lab.label}</a>
          </li>
        ))}
      </ul>
    );
  }

  // Array of strings → auto-link to labs/lab{ww}-{i+1}.html
  if (Array.isArray(val)) {
    return (
      <ul className="lab-list">
        {val.map((label, i) => (
          <li key={`${item.w}-lab-${i}`}>
            <a
              href={`${base}labs/lab${ww}-${i + 1}.html`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    );
  }

  // Single string → auto-link to labs/lab{ww}.html
  if (typeof val === "string") {
    return (
      <a
        href={`${base}labs/lab${ww}.html`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {val}
      </a>
    );
  }

  
  return <span>—</span>;
}


export default function Schedule() {
  return (
    <div className="container schedule-page">
      <h2>Schedule</h2>
      <p>Below is the tentative weekly schedule for MUSA 550.</p>

      <div className="table-wrap">
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Week</th>
              <th>Date</th>
              <th>Topic</th>
              <th>Lab</th>
            </tr>
          </thead>

          <tbody>
            {schedule.map((item) => (
              <tr key={item.w}>
                <td>{item.w}</td>
                <td>{item.date}</td>
                {/* Topic is plain text (no link) */}
                <td>{item.topic}</td>
                {/* Lab contains links (one or many) */}
                <td><LabCell item={item} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}