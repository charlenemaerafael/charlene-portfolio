import { X, Mail, Phone, MapPin, Calendar, Building, GraduationCap, Code, Award, Github, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import resumeData from "./reactive_resume-cmh1kfj7w1hnx8g5d6r2320rp.json";

export const ResumeModal = ({ isOpen, onClose }) => {
  const [resume, setResume] = useState(null);

  useEffect(() => {
    setResume(resumeData);
  }, []);

  if (!isOpen || !resume) return null;

  const { basics, sections } = resume;

  const formatDate = (dateString) => {
    if (!dateString) return "";
    return dateString;
  };

  const stripHtml = (html) => {
    if (!html) return "";
    return html.replaceAll(/<[^>]*>/g, "");
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background border border-border rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-background border-b border-border p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-primary">Resume</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Resume Content */}
        <div className="p-6 space-y-8">
          {/* Personal Info */}
          <div className="text-center space-y-4">
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-primary">
              <img
                src={basics.picture?.url || "https://via.placeholder.com/150"}
                alt={basics.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">{basics.name}</h1>
              {basics.headline && (
                <p className="text-lg text-muted-foreground mt-2">{basics.headline}</p>
              )}
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>{basics.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>{basics.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{basics.location}</span>
              </div>
            </div>

            {/* Social Profiles */}
            {sections.profiles?.items && sections.profiles.items.length > 0 && (
              <div className="flex justify-center gap-4">
                {sections.profiles.items.map((profile) => (
                  <a
                    key={profile.id}
                    href={profile.url.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors"
                  >
                    {profile.network === "Github" ? (
                      <Github className="h-4 w-4" />
                    ) : (
                      <Linkedin className="h-4 w-4" />
                    )}
                    <span>{profile.network}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Summary */}
          {sections.summary?.content && sections.summary.content !== "<p></p>" && (
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                Summary
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {stripHtml(sections.summary.content)}
              </p>
            </div>
          )}

          {/* Experience */}
          {sections.experience?.items && sections.experience.items.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Building className="h-5 w-5 text-primary" />
                Experience
              </h3>
              <div className="space-y-6">
                {sections.experience.items.map((exp) => (
                  <div key={exp.id} className="border-l-2 border-primary/20 pl-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="font-semibold text-lg">{exp.position}</h4>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(exp.date)}
                      </span>
                    </div>
                    <p className="font-medium text-primary mb-2">{exp.company}</p>
                    {exp.location && (
                      <p className="text-sm text-muted-foreground mb-3">{exp.location}</p>
                    )}
                    {exp.summary && (
                      <div className="text-muted-foreground leading-relaxed">
                        <div dangerouslySetInnerHTML={{ __html: exp.summary }} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {sections.education?.items && sections.education.items.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Education
              </h3>
              <div className="space-y-4">
                {sections.education.items.map((edu) => (
                  <div key={edu.id} className="border-l-2 border-primary/20 pl-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="font-semibold text-lg">{edu.area}</h4>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(edu.date)}
                      </span>
                    </div>
                    <p className="font-medium text-primary mb-2">{edu.institution}</p>
                    {edu.studyType && (
                      <p className="text-sm text-muted-foreground mb-2">{edu.studyType}</p>
                    )}
                    {edu.score && (
                      <p className="text-sm text-muted-foreground">GPA: {edu.score}</p>
                    )}
                    {edu.summary && (
                      <p className="text-muted-foreground mt-2 leading-relaxed">
                        {stripHtml(edu.summary)}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills */}
          {sections.skills?.items && sections.skills.items.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Skills
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {sections.skills.items.map((skill) => (
                  <div
                    key={skill.id}
                    className="px-4 py-2 rounded-full border border-primary/20 text-center hover:bg-primary/5 transition-colors"
                  >
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Download Button */}
          <div className="text-center pt-6 border-t border-border">
            <button
              onClick={() => {
                const element = document.createElement('a');
                const file = new Blob([JSON.stringify(resume, null, 2)], {type: 'application/json'});
                element.href = URL.createObjectURL(file);
                element.download = `${basics.name.replaceAll(/\s+/g, '_')}_Resume.json`;
                document.body.appendChild(element);
                element.click();
                element.remove();
              }}
              className="cosmic-button"
            >
              Download Resume JSON
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

