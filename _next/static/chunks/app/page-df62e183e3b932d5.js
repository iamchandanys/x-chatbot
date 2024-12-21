(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1903:(e,t,s)=>{Promise.resolve().then(s.bind(s,1241))},1241:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});var n=s(7437),a=s(2265),i=s(1942),r=s(8151),c=s(5428);let o=()=>{let[e,t]=a.useState(!1),[s,o]=a.useState([{name:"",content:""}]),{clientId:l,productId:d}=(0,c.H)();return(0,a.useEffect)(()=>{(async()=>{await (0,r.zC)(l,d).then(e=>{o(e)}).catch(()=>{alert("Error in fetching articles")})})()},[l,d]),(0,n.jsxs)("div",{className:"max-w-4xl mx-auto p-6 bg-gray-50 text-gray-800",children:[(0,n.jsx)("h1",{className:"text-3xl font-bold text-center mb-8",children:"Chat with Your Own Data"}),(0,n.jsxs)("section",{className:"mb-10",children:[(0,n.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Project Overview"}),(0,n.jsx)("p",{children:"The chatbot can directly interact with your own documents and answer questions based on their content. It is designed to make accessing specific information easier, helping you quickly find insights, summarize data, and support decision-making."})]}),(0,n.jsxs)("section",{className:"mb-10",children:[(0,n.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"You Can Ask These Details"}),(0,n.jsxs)("div",{className:"bg-white rounded-lg shadow-md",children:[(0,n.jsxs)("div",{className:"flex justify-between items-center px-4 py-2 cursor-pointer",onClick:()=>t(!e),children:[(0,n.jsxs)("span",{className:"text-gray-700 font-medium",children:["Uploaded documents \xa0",(0,n.jsx)("span",{className:"text-gray-500 text-sm",children:"(More details can be uploaded from API)"})]}),(0,n.jsx)("span",{className:"",children:e?(0,n.jsx)(i.ZTc,{}):(0,n.jsx)(i.NWQ,{})})]}),e&&(0,n.jsxs)("div",{className:"p-4",children:[(0,n.jsx)("div",{className:"grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3",children:s.map((e,t)=>(0,n.jsxs)("div",{className:"p-4 bg-white shadow-md rounded-lg",children:[(0,n.jsx)("h3",{className:"text-lg font-semibold mb-2",children:e.name}),(0,n.jsx)("p",{children:e.content})]},t))}),(0,n.jsx)("div",{className:"text-gray-500 text-sm mt-4",children:"* More details can be uploaded from API"})]})]})]}),(0,n.jsxs)("section",{className:"mb-10",children:[(0,n.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"How It Works (RAG - Retrieval Augmented generation)"}),(0,n.jsx)("img",{src:"https://emcdevstoragev2.blob.core.windows.net/public/RAG Model.png",alt:"RAG Model",className:"w-full h-auto mb-8"}),(0,n.jsxs)("ol",{className:"list-decimal list-inside space-y-4",children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Document Chunking Process:"})," The document library, which holds various documents, undergoes a chunking process. This means that each document is divided into smaller sections to facilitate more precise analysis and retrieval."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Embedding Creation with Azure OpenAI Service:"}),' Each chunk (or section) of a document is processed by the Azure OpenAI Service using a model called "text-embedding-3-large". This step creates numerical representations called embeddings, which capture the semantic meaning of each section. The chunked data along with their embeddings are then stored in Azure Cosmos DB.']}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Indexing in Azure AI Search Vector Index:"})," The embeddings for all the document sections are indexed in the Azure AI Search Vector Index. This vector index helps in efficiently finding the most relevant document chunks when a user query is received."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"User Interaction and Question Handling:"})," When a user submits a question, it goes through the Azure OpenAI Service to create an embedded representation of the question. The embedding is used to match and retrieve the relevant document sections from the vector index."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Answer Generation:"})," The retrieved relevant document sections are combined into a prompt, which is then processed by another model (such as GPT-4.0) to generate a comprehensive response to the user's question. This response can include not only direct answers but also other NLP tasks, such as summarization or further explanations."]})]})]}),(0,n.jsxs)("section",{className:"mb-10",children:[(0,n.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Technologies Used"}),(0,n.jsxs)("ul",{className:"list-disc list-inside space-y-2",children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Azure OpenAI Service:"})," Used to generate embeddings and process natural language inputs."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Azure Cosmos DB:"})," Stores chunked data and their embeddings for efficient retrieval."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Azure AI Search Vector Index:"})," Indexes embeddings for fast and relevant document search."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"GPT-4.0:"})," Generates responses based on user questions and relevant document content."]})]})]}),(0,n.jsxs)("section",{className:"mb-10",children:[(0,n.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Key Features"}),(0,n.jsxs)("ul",{className:"list-disc list-inside space-y-2",children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Interactive Document Search:"})," Users can ask questions about the documents, and the chatbot will provide answers derived directly from the document content."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Cost-Effective:"})," By leveraging Azure AI Verctor Search, the solution minimizes resource-intensive operations by targeting specific and relevant content rather than analyzing entire documents. This targeted approach significantly reduces computational costs, ensuring a budget-friendly implementation without compromising performance."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Efficient Data Retrieval:"})," The embedding-based approach ensures that only the most relevant portions of documents are analyzed for each question, providing quick and accurate responses."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Advanced AI Technology:"})," The system leverages Azure OpenAI Service and Azure AI Search to deliver high-quality, context-aware responses, making it suitable for a variety of applications like customer service, research assistance, and internal documentation analysis."]})]})]}),(0,n.jsxs)("section",{className:"mb-10",children:[(0,n.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Benefits"}),(0,n.jsxs)("ul",{className:"list-disc list-inside space-y-2",children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Time-Saving:"})," Provides instant answers without the need to manually search through documents."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"User-Friendly:"})," Offers a conversational interface that reduces the complexity of interacting with large volumes of data."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Flexible Usage:"})," The system can handle a variety of document formats and is adaptable for different industries."]})]})]}),(0,n.jsx)("p",{className:"text-lg",children:"This chatbot project combines document analysis with conversational AI to create an innovative solution for interacting with stored information efficiently and intuitively."}),(0,n.jsxs)("div",{className:"text-center text-xs text-gray-400 p-2 border-t border-gray-200 mt-10",children:["Developed by"," ",(0,n.jsx)("span",{children:(0,n.jsx)("a",{href:"https://www.chandanys.in/",target:"_blank",className:"underline decoration-gray-400",children:"Chandan"})})," ","• Powered by ChatGPT & Azure AI Search"]})]})};function l(){var e;let[t,s]=(0,a.useState)(!1),[l,d]=(0,a.useState)(!1),{clientId:h,productId:m}=(0,c.H)(),[u,x]=(0,a.useState)(null);return(0,a.useEffect)(()=>{(async()=>{try{let e=await (0,r.IS)(h,m);x(e)}catch(e){console.error(e)}})()},[h,m]),(0,a.useEffect)(()=>{let e=setInterval(()=>{d(e=>!e)},3e3);return()=>clearInterval(e)},[]),(0,n.jsxs)("div",{children:[(0,n.jsx)(o,{}),(0,n.jsxs)("div",{children:[!t&&(0,n.jsx)("div",{className:"fixed bottom-4 right-4",children:(0,n.jsx)("button",{className:"w-16 h-16 rounded-full transition-transform duration-300 hover:scale-110 ".concat(l?"animate-bounce":""),onClick:()=>s(!t),children:(0,n.jsx)("img",{src:"https://emcdevstoragev2.blob.core.windows.net/public/my-portfolio/dfac3783-fda3-4523-ba19-ad25ff8e28ce.png",alt:"Chatbot Icon",className:"w-full h-full object-cover"})})}),t&&(0,n.jsxs)("div",{className:"fixed inset-x-4 top-4 bottom-4 bg-white shadow-lg border border-gray-300 rounded-lg flex flex-col md:h-[600px] md:w-96 md:bottom-4 md:right-4 md:inset-auto",children:[(0,n.jsxs)("div",{className:"p-4 bg-blue-500 text-white text-lg font-bold flex justify-between items-center",children:[(0,n.jsx)("span",{children:null!==(e=null==u?void 0:u.botName)&&void 0!==e?e:"Assistant"}),(0,n.jsx)("button",{className:"text-white hover:text-gray-200",onClick:()=>s(!1),children:(0,n.jsx)(i.aHS,{})})]}),(0,n.jsx)("div",{className:"flex-1",children:(0,n.jsx)("iframe",{src:"https://iamchandanys.github.io/x-chatbot/in-iframe/?clientId=48e9556f-a15a-49f6-93f9-851ef9a909d4&productId=5d6e453e-4ae4-41ad-846b-e250c7fa27fe",title:"Chat Assistant",className:"w-full h-full",allow:"fullscreen",style:{border:"none"}})})]})]})]})}},8151:(e,t,s)=>{"use strict";s.d(t,{fS:()=>r,zC:()=>c,IS:()=>l,vt:()=>o,zg:()=>i});var n=s(8472);let a="https://emc-b2b-api.azurewebsites.net/api/",i=async(e,t)=>{try{return(await n.Z.get("".concat(a,"XChatBot/InitChat/").concat(e,"/").concat(t))).data}catch(e){console.error(e)}},r=async e=>{try{return(await n.Z.post("".concat(a,"XChatBot/ChatCompletion"),e)).data}catch(e){throw Error(e instanceof Error?e.message:String(e))}},c=async(e,t)=>{try{return(await n.Z.get("".concat(a,"XChatBot/GetAllDocuments/").concat(e,"/").concat(t))).data}catch(e){throw Error(e instanceof Error?e.message:String(e))}},o=async(e,t)=>{try{return(await n.Z.get("".concat(a,"XChatBot/GetSuggestions/").concat(e,"/").concat(t))).data}catch(e){throw Error(e instanceof Error?e.message:String(e))}},l=async(e,t)=>{try{return(await n.Z.get("".concat(a,"XChatBot/GetClientDetails/").concat(e,"/").concat(t))).data}catch(e){throw Error(e instanceof Error?e.message:String(e))}}},5428:(e,t,s)=>{"use strict";s.d(t,{H:()=>n,S:()=>a});let n=()=>{if(!window.location)return{clientId:"",productId:""};{let e=new URLSearchParams(window.location.search);return{clientId:e.get("clientId")||"ae87240b-d0b8-4ea1-b3a1-7f4e7caef0f4",productId:e.get("productId")||"b46a6bc5-b7ad-48c8-bbbb-259082522ac6"}}},a=e=>{new Audio(e?"/x-chatbot/sounds/send.mp3":"/x-chatbot/sounds/receive.mp3").play()}}},e=>{var t=t=>e(e.s=t);e.O(0,[699,265,130,215,744],()=>t(1903)),_N_E=e.O()}]);