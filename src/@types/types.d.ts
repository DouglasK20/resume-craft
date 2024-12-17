type ResumeImageData = {
    url: string;
    visible: boolean;
}

type ResumeInfosData = {
    fullName: string;
    headLine: string;
    email: string;
    website: string;
    phone: string;
    location: string;
}

type ResumeContentData = {
    image: ResumeImageData;
    infos: ResumeInfosData;
}

type ResumeData = {
    content: ResumeContentData;
    // structure: ResumeStructureData;
}