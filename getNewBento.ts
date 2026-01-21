const apiUrl = "https://opbento.edgexhq.tech/api/bento?n=Ankit&g=bearerOP&x=ankit_twt&l=yadavankit189&i=https%3A%2F%2Fres.cloudinary.com%2Fdg62qprjy%2Fimage%2Fupload%2Fv1768998928%2FIMG_7625_j3ezat.png&p=bearerop.live&z=cad70";
interface BentoResponse {
  url: string;
}

const fetchBentoUrl = async (apiUrl: string): Promise<string> => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: BentoResponse = (await response.json()) as BentoResponse;
    return data.url;
  } catch (error) {
    console.error("Error fetching Bento URL:", error);
    throw error;
  }
};

// @ts-ignore
fetchBentoUrl(apiUrl);
