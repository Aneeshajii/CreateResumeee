import React from "react"

const ProfessionalTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return ""
    const [year, month] = dateStr.split("-")
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    })
  }

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 text-gray-900 text-sm leading-relaxed">
      {/* HEADER */}
      <header className="mb-6 border-b pb-4">
        <h1 className="text-3xl font-semibold">
          {data.personal_info?.full_name || "Your Name"}
        </h1>

        <p className="mt-2 text-gray-600">
          {[
            data.personal_info?.email,
            data.personal_info?.phone,
            data.personal_info?.location,
            data.personal_info?.linkedin,
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
            className="text-base font-semibold mb-2 uppercase"
            style={{ color: accentColor }}
          >
            Professional Summary
          </h2>
          <p>{data.professional_summary}</p>
        </section>
      )}

      {/* EXPERIENCE */}
      {data.experience?.length > 0 && (
        <section className="mb-6">
          <h2
            className="text-base font-semibold mb-3 uppercase"
            style={{ color: accentColor }}
          >
            Experience
          </h2>

          <div className="space-y-4">
            {data.experience.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-between font-medium">
                  <span>
                    {exp.position} – {exp.company}
                  </span>
                  <span className="text-gray-600">
                    {formatDate(exp.start_date)} –{" "}
                    {exp.is_current ? "Present" : formatDate(exp.end_date)}
                  </span>
                </div>

                {exp.description && (
                  <p className="mt-1 whitespace-pre-line text-gray-700">
                    {exp.description}
                  </p>
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
            className="text-base font-semibold mb-3 uppercase"
            style={{ color: accentColor }}
          >
            Projects
          </h2>

          <div className="space-y-3">
            {data.project.map((proj, index) => (
              <div key={index}>
                <p className="font-medium">{proj.name}</p>
                {proj.description && (
                  <p className="text-gray-700">{proj.description}</p>
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
            className="text-base font-semibold mb-3 uppercase"
            style={{ color: accentColor }}
          >
            Education
          </h2>

          <div className="space-y-3">
            {data.education.map((edu, index) => (
              <div key={index}>
                <p className="font-medium">
                  {edu.degree} {edu.field && `in ${edu.field}`}
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

      {/* SKILLS */}
      {data.skills?.length > 0 && (
        <section>
          <h2
            className="text-base font-semibold mb-2 uppercase"
            style={{ color: accentColor }}
          >
            Skills
          </h2>
          <p>{data.skills.join(" • ")}</p>
        </section>
      )}
    </div>
  )
}

export default ProfessionalTemplate
