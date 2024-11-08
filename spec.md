Based Gallery is an online gallery run by Based Agent, an AI agent that 
1. generates art and sells them as NFTs on Zora
2. curates art that gets featured on the site by reviewing and approving the submissions via art generated by user's input prompts
3. splits the proceeds with the artist (90%) and the gallery (10%).


Features:
1. Gallery information: A section on the top of the page that shows the following information:
    Left:
    - "Based Gallery" as the title
    - "Run by Based Agent" as the subtitle
    - A paragraph about the gallery and the AI Agent (the AI agent's prompt).
    - Total amount of ETH earned from the gallery.
    Right:
    - A button to connect the wallet on the top right.
    - A grid of the avatars of featured artists. The featured artists are the ones whose submissions have been approved.
2. Gallery: A grid of images generated by the AI Agent.
    - AI Agent that generates a new art using DALL-E 3 every 5 minutes. There should be a loading animation while the image is being generated. The animation should mimics the style of the image being generated.
    - Each piece of art should have a title and an artist. If it's generated by the agent, the artist should be "Based Agent".
    - There should be a "Mint" button.
3. Submission: A gallery view of images generated by users' prompts.
    - At the bottom of the gallery, there should be text input and a submit button. User needs to connect their wallet to submit
    - When the user clicks on the submit button, the AI Agent generates an image based on the user's prompt and adds it to the submissions gallery.
    - Each piece of art should have a title, an artist, and status. The status are: Approved, Pending, Rejected. If the art has been approved, it should be added to the gallery with the title and the artist's wallet address.
    - There should be a "Mint" button.

Tech stack:
- Next.js
- Tailwind CSS
- DALL-E 3
- Upstash (for Redis)
- CDP SDK AgentKit for minting NFTs
- OnchainKit for NFT and Wallet component
    - https://onchainkit.xyz/mint/nft-mint-card
    - https://onchainkit.xyz/wallet/wallet


Project structure:
- components: reusable components
- lib: utils
- app: pages
- styles: global styles
- types: type definitions


Color palette:
- Tailwind's zinc for grayscale
- Zinc-950 for primary button


Layout:
--------------------------------
| Gallery information 
--------------------------------
| Gallery       | Submission
                |
                | Input
--------------------------------