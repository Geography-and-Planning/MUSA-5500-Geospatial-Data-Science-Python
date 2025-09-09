import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./Assignments.css";

const assignments = [
  {
    id: "a1",
    title: "HW #1 — Python Basics & Setup",
    assigned: "Thu, Sep 4",
    due: "Sun, Sep 13 @ 11:59 PM",
    detailsMd: `
**Assigned on:** Thu, September 4  
**Due:** Sun, September 13 at 11:59 PM  

---
### Part 1: Installing Python locally and launching Jupyter
- Follow the initial installation guide on the course website to set up Python locally and launch JupyterLab.
- See the recommended readings for \`Python\`, mamba/conda, and \`Jupyter\`.
- Reading
    - Gettting start with Conda ([link](https://docs.conda.io/projects/conda/en/latest/user-guide/getting-started.html))
    - Starting JupyterLab ([Link](https://jupyterlab.readthedocs.io/en/stable/getting_started/starting.html))
    - Recommended tutorial for students with little Python background: Practical Python Programming ([link](https://dabeaz-course.github.io/practical-python/Notes/Contents.html))
    - Working with Notebooks in JupyterLab ([Link](https://jupyterlab.readthedocs.io/en/stable/user/notebook.html))
    - Working with files in JupyterLab ([Link](https://jupyterlab.readthedocs.io/en/stable/user/files.html))

### Working Locally
- After activating the course environment, run \`jupyter lab\`.
- Open the notebook \`assignment-1.ipynb\`. You can download it from here, [link](https://github.com/xiaojianggis/MUSA-5500-Geospatial-Data-Science-Python/blob/main/public/assignments/assignment-1.ipynb)
- Jupyter runs from the current working directory; get it with \`pwd\`.
- If you cloned the repo, start Jupyter in that folder.


### Part 2: Exploring the Donut Effect (Philadelphia ZIPs)
- Explore the Donut Effect for home values.
- Submit a Jupyter notebook (\`.ipynb\`). A starter notebook is in the repo.


### Submission Notes
- Submit via **Canvas**. Please submit your notebook to Canvas directly, not as a GitHub link.


    `
  }
];




//   // Add more assignments with `detailsMd` (markdown)…
//   {
//     id: "a2",
//     title: "HW #2 — Pandas & Visualization",
//     assigned: "Wed, Oct 2",
//     due: "Mon, Oct 14 @ 11:59 PM",
//     detailsMd: `
// **Materials:** [assignment-2 (starter)](#)  
// **Submission:** GitHub Classroom

// ### Overview
// Work with tabular datasets in **Pandas** and create exploratory plots using **Matplotlib**.  
// Please include inline interpretations below each figure.

// - Load, clean, and describe the dataset  
// - Create at least **3** diagnostic plots  
// - Discuss findings (3–5 bullet points)
//     `
//   }



export default function Assignments() {
  const [openId, setOpenId] = useState(null);
  const toggle = (id) => setOpenId((cur) => (cur === id ? null : id));

  return (
    <div className="container assignments-page">
          <h2 id="guidelines">Guidelines</h2>
          <p>
            There are several homework assignments during the term and one final
            project at the end. Your lowest assignment grade is dropped.Assignments are submitted as Jupyter notebooks. To streamline grading,
            please follow these practices:
          </p>

          <ol>
            <li>
              <strong>Polished notebooks:</strong>
              <ul>
                <li>Include your name (and any collaborators) at the top.</li>
                <li>Remove unused or exploratory fragments.</li>
                <li>Use Markdown cells and/or code comments to explain steps.</li>
                <li>Use section headings to organize your analysis.</li>
              </ul>
            </li>
            <li>
              <strong>Reproducible and executable:</strong>
              <ul>
                <li>Ensure the notebook runs top‑to‑bottom without errors.</li>
                <li>
                  If you use data, either include it in your repo or clearly
                  document the source so it can be downloaded for grading.
                </li>
                <li>
                  Use <em>relative</em> file paths so the repo structure works
                  when cloned. See the course note on file paths for more detail.
                </li>
              </ul>
            </li>

            <li>
              <strong>Submit your notebook to Canvas</strong>
                <ul>
                  <li>
                    Please submit your assigment together with your data to canvas. 
                  </li>
                  <li>You can upload the zipped file or just sumbit all of them together. 
                    
                  </li>
                </ul>
              </li>
          </ol>

      <h2>Assigments</h2>

      <div className="table-wrap">
        <table className="assignments-table">
          <thead>
            <tr>
              <th style={{width:"40%"}}>Assignment</th>
              <th style={{width:"20%"}}>Assigned</th>
              <th style={{width:"25%"}}>Due</th>
              <th style={{width:"15%"}}>Details</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map(a => {
              const expanded = openId === a.id;
              const panelId = `${a.id}-panel`;
              return (
                <React.Fragment key={a.id}>
                  <tr className={`a-summary ${expanded ? "is-open" : ""}`}>
                    <td>
                      <button
                        className="a-toggle"
                        aria-expanded={expanded}
                        aria-controls={panelId}
                        onClick={() => toggle(a.id)}
                      >
                        <span className="a-title">{a.title}</span>
                        <span className="a-chevron" aria-hidden>▸</span>
                      </button>
                    </td>
                    <td>{a.assigned}</td>
                    <td>{a.due}</td>
                    <td className="a-actions">
                      <button
                        className="a-ghost"
                        aria-expanded={expanded}
                        aria-controls={panelId}
                        onClick={() => toggle(a.id)}
                      >
                        {expanded ? "Hide" : "View"}
                      </button>
                    </td>
                  </tr>

                  {expanded && (
                    <tr className="a-details-row">
                      <td id={panelId} colSpan={4}>
                        <div className="a-details markdown-body">
                          <ReactMarkdown>{a.detailsMd}</ReactMarkdown>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}