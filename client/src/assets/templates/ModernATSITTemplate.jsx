import React from "react"

const ModernATSITTemplate = ({ data, accentColor = "#1f2937" }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return ""
    const [year, month] = dateStr.split("-")
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    })
  }

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 text-gray-900 text-sm leading-relaxed font-sans">
      {/* HEADER */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">
          {data.personal_info?.full_name || "Your Name"}
        </h1>

        <p className="mt-2 text-gray-700">
          {[
            data.personal_info?.email,
            data.personal_info?.phone,
            data.personal_info?.location,
          ]
            .filter(Boolean)
            .join(" | ")}
        </p>

        <p className="text-gray-700">
          {[
            data.personal_info?.linkedin,
            data.personal_info?.github,
            data.personal_info?.website,
          ]
            .filter(Boolean)
            .join(" | ")}
        </p>
      </header>

      {/* SUMMARY */}
      {data.professional_summary && (
        <section className="mb-6">
          <h2
            className="font-semibold uppercase mb-2 text-sm"
            style={{ color: accentColor }}
          >
            Professional Summary
          </h2>
          <p>{data.professional_summary}</p>
        </section>
      )}

      {/* TECHNICAL SKILLS */}
      {data.skills?.length > 0 && (
        <section className="mb-6">
          <h2
            className="font-semibold uppercase mb-2 text-sm"
            style={{ color: accentColor }}
          >
            Technical Skills
          </h2>
          <p className="text-gray-800">
            {data.skills.join(" | ")}
          </p>
        </section>
      )}

      {/* EXPERIENCE */}
      {data.experience?.length > 0 && (
        <section className="mb-6">
          <h2
            className="font-semibold uppercase mb-3 text-sm"
            style={{ color: accentColor }}
          >
            Professional Experience
          </h2>

          <div className="space-y-4">
            {data.experience.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-between flex-wrap font-medium">
                  <span>
                    {exp.position}, {exp.company}
                  </span>
                  <span className="text-gray-600">
                    {formatDate(exp.start_date)} –{" "}
                    {exp.is_current ? "Present" : formatDate(exp.end_date)}
                  </span>
                </div>

                {exp.description && (
                  <ul className="mt-2 list-disc pl-5 text-gray-700 space-y-1">
                    {exp.description.split("\n").map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PROJECTS */}
      {data.project?.length > 0 && (
        <section className="mb-6">
          <h2
            className="font-semibold uppercase mb-3 text-sm"
            style={{ color: accentColor }}
          >
            Projects
          </h2>

          <div className="space-y-3">
            {data.project.map((proj, index) => (
              <div key={index}>
                <p className="font-medium">
                  {proj.name}
                  {proj.tech_stack && (
                    <span className="text-gray-600 font-normal">
                      {" "}– {proj.tech_stack}
                    </span>
                  )}
                </p>

                {proj.description && (
                  <ul className="mt-1 list-disc pl-5 text-gray-700 space-y-1">
                    {proj.description.split("\n").map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* EDUCATION */}
      {data.education?.length > 0 && (
        <section className="mb-6">
          <h2
            className="font-semibold uppercase mb-3 text-sm"
            style={{ color: accentColor }}
          >
            Education
          </h2>

          <div className="space-y-3">
            {data.education.map((edu, index) => (
              <div key={index}>
                <p className="font-medium">
                  {edu.degree}
                  {edu.field && ` in ${edu.field}`}
                </p>
                <p className="text-gray-600">
                  {edu.institution} | {formatDate(edu.graduation_date)}
                  {edu.gpa && ` | GPA: ${edu.gpa}`}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CERTIFICATIONS */}
      {data.certifications?.length > 0 && (
        <section>
          <h2
            className="font-semibold uppercase mb-2 text-sm"
            style={{ color: accentColor }}
          >
            Certifications
          </h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            {data.certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}

export default ModernATSITTemplate
