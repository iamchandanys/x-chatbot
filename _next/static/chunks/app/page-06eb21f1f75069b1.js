(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1903:(e,s,t)=>{Promise.resolve().then(t.bind(t,7200))},7200:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>v});var n=t(7437),a=t(2265),r=t(1942),i=t(5097),c=t(7485),l=t(8472);let o="https://emc-b2b-api.azurewebsites.net/api/",d=async(e,s)=>{try{return(await l.Z.get("".concat(o,"XChatBot/InitChat/").concat(e,"/").concat(s))).data}catch(e){console.error(e)}},h=async e=>{try{return(await l.Z.post("".concat(o,"XChatBot/ChatCompletion"),e)).data}catch(e){console.error(e)}},m=async(e,s)=>{try{return(await l.Z.get("".concat(o,"XChatBot/GetAllDocuments/").concat(e,"/").concat(s))).data}catch(e){console.error(e)}},x=async(e,s)=>{try{return(await l.Z.get("".concat(o,"XChatBot/GetSuggestions/").concat(e,"/").concat(s))).data}catch(e){console.error(e)}},u=async(e,s)=>{try{return(await l.Z.get("".concat(o,"XChatBot/GetClientDetails/").concat(e,"/").concat(s))).data}catch(e){console.error(e)}},g=()=>{if(!window.location)return{clientId:"",productId:""};{let e=new URLSearchParams(window.location.search);return{clientId:e.get("clientId")||"ae87240b-d0b8-4ea1-b3a1-7f4e7caef0f4",productId:e.get("productId")||"b46a6bc5-b7ad-48c8-bbbb-259082522ac6"}}},b=e=>{new Audio(e?"/x-chatbot/sounds/send.mp3":"/x-chatbot/sounds/receive.mp3").play()},p=e=>{let{onClickSuggestion:s}=e,[t,r]=(0,a.useState)([]),{clientId:i,productId:c}=g();return(0,a.useEffect)(()=>{(async()=>{r(await x(i,c))})()},[i,c]),(0,n.jsx)("div",{className:"flex justify-center items-center w-full",children:(0,n.jsxs)("div",{className:"p-4 max-w-md bg-white",children:[(0,n.jsxs)("h1",{className:"text-lg font-bold mb-3 flex items-center",children:[(0,n.jsx)("span",{className:"mr-2",children:"\uD83D\uDC4B"}),"Hi there"]}),(0,n.jsx)("p",{className:"text-gray-600 mb-3 text-xs",children:"Ask me anything about star health insurance.."}),(0,n.jsx)("div",{className:"flex flex-wrap gap-2",children:null==t?void 0:t.map((e,t)=>(0,n.jsx)("button",{className:"py-1 px-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg shadow whitespace-nowrap text-xs",onClick:()=>s(e),children:e},t))})]})})};var j=t(8904);let f=e=>{let{clientDetails:s}=e,{clientId:t,productId:l}=g(),[o,m]=(0,a.useState)(!1),[x,u]=(0,a.useState)([]),[f,y]=(0,a.useState)(""),[v,w]=(0,a.useState)(""),[N,A]=(0,a.useState)(!1),k=(0,a.useRef)(null),I=()=>{o?(u([]),w("")):(A(!0),(async()=>{await d(t,l).then(e=>{A(!1),b(!1),u([{sender:"system",text:"Hello! How can I assist you today?"}]),y(e.id)}).catch(()=>{A(!1),alert("Error in initializing chat")})})()),m(!o)},C=e=>{if(""===e.trim())return;let s=[...x,{sender:"user",text:e}];b(!0),u(s),w(""),A(!0),(async()=>{await h({chatId:f,message:e,clientId:t,productId:l}).then(e=>{A(!1),console.log(e),b(!1),u(s=>[...s,{sender:"system",text:null==e?void 0:e.messageContent}])}).catch(()=>{A(!1),alert("Error in sending message to chatCompletion")})})()};return(0,a.useEffect)(()=>{k.current&&k.current.scrollIntoView({behavior:"smooth"})},[x]),(0,n.jsxs)("div",{children:[(0,n.jsx)("style",{children:"\n    .no-scrollbar::-webkit-scrollbar { display: none; }\n    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }\n  "}),(0,n.jsxs)("div",{className:"fixed bottom-4 right-4",children:[!o&&(0,n.jsx)("button",{onClick:I,className:"bg-purple-700 text-white rounded-md p-4 shadow-lg transition-transform transform hover:scale-105",children:(0,n.jsx)(r.etr,{})}),o&&(0,n.jsxs)("div",{className:"w-94 h-[36rem] bg-white rounded-lg shadow-2xl flex flex-col mt-2",children:[(0,n.jsxs)("div",{className:"flex justify-between items-center bg-white text-black p-4 border-b border-gray-200 rounded-t-lg",children:[(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)(r.etr,{className:"text-2xl mr-2"}),(0,n.jsx)("span",{className:"font-semibold text-lg",children:null==s?void 0:s.botName})]}),(0,n.jsx)("div",{className:"flex items-center space-x-4",children:(0,n.jsx)("button",{onClick:I,className:"hover:text-gray-500 focus:outline-none",children:(0,n.jsx)(r.aHS,{})})})]}),(0,n.jsxs)("div",{className:"flex-1 p-4 overflow-y-auto overflow-hidden no-scrollbar",children:[x.map((e,s)=>(0,n.jsxs)("div",{className:"mb-3 flex items-start ".concat("user"===e.sender?"justify-end":"justify-start"),children:["system"===e.sender&&(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)(r.etr,{className:"mr-2 text-lg text-purple-700"}),(0,n.jsx)("div",{className:"bg-purple-100 text-black p-3 rounded-lg max-w-xs text-sm",children:(0,n.jsx)(j.U,{children:e.text})})]}),"user"===e.sender&&(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)("div",{className:"bg-gray-100 text-black p-3 rounded-lg max-w-xs text-sm mr-2",children:e.text}),(0,n.jsx)(r.Xws,{className:"text-lg text-gray-700"})]})]},s)),N&&(0,n.jsxs)("div",{className:"flex items-start mb-3",children:[(0,n.jsx)(r.etr,{className:"mr-2 text-lg text-purple-700"}),(0,n.jsx)("div",{className:"flex items-center",children:(0,n.jsx)(c.g4,{height:"10",width:"30",color:"#6b46c1",ariaLabel:"three-dots-loading"})})]}),(0,n.jsx)("div",{ref:k})]}),!x.find(e=>"user"===e.sender)&&(0,n.jsx)("div",{className:"mb-2",children:(0,n.jsx)(p,{onClickSuggestion:e=>{w(e),C(e)}})}),(0,n.jsx)("div",{className:"p-4 border-t border-gray-200",children:(0,n.jsxs)("div",{className:"flex items-center bg-gray-100 p-3 rounded",children:[(0,n.jsx)("textarea",{className:"flex-1 bg-transparent outline-none text-black px-4 text-base resize-none",value:v,onChange:e=>w(e.target.value),onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||N||(e.preventDefault(),C(v))},placeholder:"Type your question...",rows:3}),(0,n.jsx)("button",{onClick:()=>C(v),className:"text-white bg-purple-500 hover:bg-purple-800 p-2 rounded-full focus:outline-none ml-3 text-lg",disabled:N,children:(0,n.jsx)(i.VzJ,{className:"pl-1"})})]})}),(0,n.jsxs)("div",{className:"text-center text-xs text-gray-400 p-2 border-t border-gray-200",children:["Developed by"," ",(0,n.jsx)("span",{children:(0,n.jsx)("a",{href:"https://www.chandanys.in/",target:"_blank",className:"underline decoration-gray-400",children:"Chandan"})})," ","• Powered by ChatGPT & Azure AI Search"]})]})]})]})},y=()=>{let[e,s]=a.useState(!1),[t,i]=a.useState([{name:"",content:""}]),{clientId:c,productId:l}=g();return(0,a.useEffect)(()=>{(async()=>{await m(c,l).then(e=>{i(e)}).catch(()=>{alert("Error in fetching articles")})})()},[c,l]),(0,n.jsxs)("div",{className:"max-w-4xl mx-auto p-6 bg-gray-50 text-gray-800",children:[(0,n.jsx)("h1",{className:"text-3xl font-bold text-center mb-8",children:"Chat with Your Own Data"}),(0,n.jsxs)("section",{className:"mb-10",children:[(0,n.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Project Overview"}),(0,n.jsx)("p",{children:"The chatbot can directly interact with your own documents and answer questions based on their content. It is designed to make accessing specific information easier, helping you quickly find insights, summarize data, and support decision-making."})]}),(0,n.jsxs)("section",{className:"mb-10",children:[(0,n.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"You Can Ask These Details"}),(0,n.jsxs)("div",{className:"bg-white rounded-lg shadow-md",children:[(0,n.jsxs)("div",{className:"flex justify-between items-center px-4 py-2 cursor-pointer",onClick:()=>s(!e),children:[(0,n.jsxs)("span",{className:"text-gray-700 font-medium",children:["Uploaded documents \xa0",(0,n.jsx)("span",{className:"text-gray-500 text-sm",children:"(More details can be uploaded from API)"})]}),(0,n.jsx)("span",{className:"",children:e?(0,n.jsx)(r.ZTc,{}):(0,n.jsx)(r.NWQ,{})})]}),e&&(0,n.jsxs)("div",{className:"p-4",children:[(0,n.jsx)("div",{className:"grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3",children:t.map((e,s)=>(0,n.jsxs)("div",{className:"p-4 bg-white shadow-md rounded-lg",children:[(0,n.jsx)("h3",{className:"text-lg font-semibold mb-2",children:e.name}),(0,n.jsx)("p",{children:e.content})]},s))}),(0,n.jsx)("div",{className:"text-gray-500 text-sm mt-4",children:"* More details can be uploaded from API"})]})]})]}),(0,n.jsxs)("section",{className:"mb-10",children:[(0,n.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"How It Works (RAG - Retrieval Augmented generation)"}),(0,n.jsx)("img",{src:"https://emcdevstoragev2.blob.core.windows.net/public/RAG Model.png",alt:"RAG Model",className:"w-full h-auto mb-8"}),(0,n.jsxs)("ol",{className:"list-decimal list-inside space-y-4",children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Document Chunking Process:"})," The document library, which holds various documents, undergoes a chunking process. This means that each document is divided into smaller sections to facilitate more precise analysis and retrieval."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Embedding Creation with Azure OpenAI Service:"}),' Each chunk (or section) of a document is processed by the Azure OpenAI Service using a model called "text-embedding-3-large". This step creates numerical representations called embeddings, which capture the semantic meaning of each section. The chunked data along with their embeddings are then stored in Azure Cosmos DB.']}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Indexing in Azure AI Search Vector Index:"})," The embeddings for all the document sections are indexed in the Azure AI Search Vector Index. This vector index helps in efficiently finding the most relevant document chunks when a user query is received."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"User Interaction and Question Handling:"})," When a user submits a question, it goes through the Azure OpenAI Service to create an embedded representation of the question. The embedding is used to match and retrieve the relevant document sections from the vector index."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Answer Generation:"})," The retrieved relevant document sections are combined into a prompt, which is then processed by another model (such as GPT-4.0) to generate a comprehensive response to the user's question. This response can include not only direct answers but also other NLP tasks, such as summarization or further explanations."]})]})]}),(0,n.jsxs)("section",{className:"mb-10",children:[(0,n.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Technologies Used"}),(0,n.jsxs)("ul",{className:"list-disc list-inside space-y-2",children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Azure OpenAI Service:"})," Used to generate embeddings and process natural language inputs."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Azure Cosmos DB:"})," Stores chunked data and their embeddings for efficient retrieval."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Azure AI Search Vector Index:"})," Indexes embeddings for fast and relevant document search."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"GPT-4.0:"})," Generates responses based on user questions and relevant document content."]})]})]}),(0,n.jsxs)("section",{className:"mb-10",children:[(0,n.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Key Features"}),(0,n.jsxs)("ul",{className:"list-disc list-inside space-y-2",children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Interactive Document Search:"})," Users can ask questions about the documents, and the chatbot will provide answers derived directly from the document content."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Cost-Effective:"})," By leveraging Azure AI Verctor Search, the solution minimizes resource-intensive operations by targeting specific and relevant content rather than analyzing entire documents. This targeted approach significantly reduces computational costs, ensuring a budget-friendly implementation without compromising performance."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Efficient Data Retrieval:"})," The embedding-based approach ensures that only the most relevant portions of documents are analyzed for each question, providing quick and accurate responses."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Advanced AI Technology:"})," The system leverages Azure OpenAI Service and Azure AI Search to deliver high-quality, context-aware responses, making it suitable for a variety of applications like customer service, research assistance, and internal documentation analysis."]})]})]}),(0,n.jsxs)("section",{className:"mb-10",children:[(0,n.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Benefits"}),(0,n.jsxs)("ul",{className:"list-disc list-inside space-y-2",children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Time-Saving:"})," Provides instant answers without the need to manually search through documents."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"User-Friendly:"})," Offers a conversational interface that reduces the complexity of interacting with large volumes of data."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Flexible Usage:"})," The system can handle a variety of document formats and is adaptable for different industries."]})]})]}),(0,n.jsx)("p",{className:"text-lg",children:"This chatbot project combines document analysis with conversational AI to create an innovative solution for interacting with stored information efficiently and intuitively."}),(0,n.jsxs)("div",{className:"text-center text-xs text-gray-400 p-2 border-t border-gray-200 mt-10",children:["Developed by"," ",(0,n.jsx)("span",{children:(0,n.jsx)("a",{href:"https://www.chandanys.in/",target:"_blank",className:"underline decoration-gray-400",children:"Chandan"})})," ","• Powered by ChatGPT & Azure AI Search"]})]})};function v(){let{clientId:e,productId:s}=g(),[t,r]=(0,a.useState)(null);return(0,a.useEffect)(()=>{(async()=>{r(await u(e,s))})()},[e,s]),(0,n.jsxs)("div",{children:[(0,n.jsx)(y,{}),(0,n.jsx)(f,{clientDetails:t})]})}}},e=>{var s=s=>e(e.s=s);e.O(0,[706,699,571,387,130,215,744],()=>s(1903)),_N_E=e.O()}]);