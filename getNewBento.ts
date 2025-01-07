const apiUrl = "https://opbento.edgexhq.tech/api/bento?n=Ankit%20Yadav&g=BearerOP&x=ankit_189&l=yadavankit189&i=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ftheslugproject.appspot.com%2Fo%2Fimage%2520(7).png%3Falt%3Dmedia%26token%3Dc204a99e-72c5-471d-b3e5-fd45d7a94bb5&p=https%3A%2F%2Fbearerop.tech&z=0591b";
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
