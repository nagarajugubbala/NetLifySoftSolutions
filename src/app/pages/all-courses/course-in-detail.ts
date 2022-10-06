export class CourseInDetail {
    constructor(courseID: number, name: string, skills_covered: string, img_background: string,
        paragraph1: string, paragraph2: string,
        specialization: string,
        tool1: string, tool2: string, tool3: string, tool4: string, tool5: string, tool6: string, tool7: string, tool8: string, tool9: string, tool10: string,) {
        this.courseID = courseID;
        this.name = name;
        this.skills_covered = skills_covered;
        this.img_background = img_background;
        this.paragraph1 = paragraph1; this.paragraph2 = paragraph2;
        this.specialization = specialization;
        this.tool1 = tool1; this.tool2 = tool2; this.tool3 = tool3; this.tool4 = tool4; this.tool5 = tool5; this.tool6 = tool6; this.tool7 = tool7; this.tool8 = tool8; this.tool9 = tool9; this.tool10 = tool10;
    }
    courseID: number;
    name: string;
    skills_covered: string;
    img_background: string;
    paragraph1: string; paragraph2: string;
    specialization: string;
    tool1: string; tool2: string; tool3: string; tool4: string; tool5: string; tool6: string; tool7: string; tool8: string; tool9: string; tool10: string;
}
