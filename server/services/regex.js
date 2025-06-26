const resumeMatching = (data) => {
    const sections = [];
    const regexPattern = /(Objective|Summary|Profile|Education|Experience|Work Experience|Projects|Skills|Technical Skills|Certifications|Achievements|Awards|Languages|Interests|Hobbies|Contact|Personal Details|Declaration)/gi;

    const matches = [...data.matchAll(regexPattern)];

    matches.forEach((match, index) => {
        const start_idx = match.index;
        const end_idx = (index + 1 < matches.length) ? matches[index + 1].index : data.length;

        // Escape special characters in match[0] to build safe regex
        const escapedHeader = match[0].replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

        // Create a custom regex for each section to remove header + bullets + symbols
        const rem_regex = new RegExp(`${escapedHeader}|[•\\n\\-]`, "g");

        const section = data.substring(start_idx, end_idx).replace(rem_regex, "").trim();

        sections.push({
            section_name: match[0].trim(),
            section_content: section
        });
    });

    return sections;
};

module.exports = resumeMatching;
