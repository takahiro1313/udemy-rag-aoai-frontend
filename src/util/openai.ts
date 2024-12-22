// import {AzureKeyCredential,OpenAIClient} from '@azure/openai'
// import axios from 'axios'

// export const getOnYourData = async (message: string): Promise<any[]> => {
//     return new Promise(async (resolve, reject) => {
//         const endpoint = process.env.AZURE_OPENAI_API_ENDPOINT!
//         const azureApiKey = process.env.AZURE_OPENAI_API_KEY!
//         const deploymentId = process.env.AZURE_OPENAI_API_DEPLOYMENT_ID!

//         console.log('On your data start')
        
//         const apiUrl = 'https://api-webapp-udemy-rag-taka13taka.azurewebsites.net/conversation';

//         const requestData = {
//             messages:[
//                 {role:'user',content:message}
//             ]
//         }

//         const res = await axios.post(apiUrl, requestData)
        
//         const content = `
//         #　質問
//         ${message}
//         # 回答
//         ${res.data}
//         `
//         const messages: any[] = [
//             {
//                 role:'system',
//                 content:'You are a helpful assistant'
//             },
//             {
//                 role:'user',
//                 content
//             }
//         ]

//         const client = new OpenAIClient(endpoint, new AzureKeyCredential(azureApiKey))

//         const result = await client.getChatCompletions(deploymentId, messages)

//         resolve(result.choices)
//     })
// }
import axios from 'axios';

export const getOnYourData = async (message: string): Promise<any[]> => {
  try {
    const endpoint = process.env.AZURE_OPENAI_API_ENDPOINT!;
    const azureApiKey = process.env.AZURE_OPENAI_API_KEY!;
    const deploymentId = process.env.AZURE_OPENAI_API_DEPLOYMENT_ID!;
    const apiUrl = `${endpoint}/openai/deployments/${deploymentId}/chat/completions?api-version=2023-05-15`;

    console.log('Sending request to:', apiUrl);

    const requestData = {
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: message }
      ]
    };

    const headers = {
      'Content-Type': 'application/json',
      'api-key': azureApiKey
    };

    const response = await axios.post(apiUrl, requestData, { headers });
    console.log('Response:', response.data);

    return response.data.choices;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
