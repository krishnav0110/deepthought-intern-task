export function displayAssetTemplate (asset) {
    return `<iframe class="asset-content"
        src=${asset.asset_content}>
    </iframe>
    <style>
        iframe.asset-content {
            margin: 50px 0;
        }
    </style>`;
}





export function inputThreadBuilderAssetTemplate (asset) {
    return `
    <div class="asset-content">
        <div class="asset-content-thread-title">Thread A</div>
        <div class="asset-content-subthread-con">
            <div class="asset-content-subthread">
                <div class="asset-content-subthread-title">Sub Thread 1</div>
                <textarea class="asset-content-subthread-input">Enter Text Here</textarea>
            </div>
            <div class="asset-content-subthread">
                <div class="asset-content-subthread-title">Sub Interpretation 1</div>
                <textarea class="asset-content-subthread-input">Enter Text Here</textarea>
            </div>
        </div>
        <button class="subthread-btn"><img src="/assets/crossIcon.svg">Sub-Thread</button>
        <div class="thread-summary asset-content-subthread">
            <div class="asset-content-subthread-title">Summary for Thread A</div>
            <textarea class="asset-content-subthread-input">Enter Text Here</textarea>
        </div>
    </div>
    <style>
        .asset-content-thread-title {
            padding: 10px 0 10px 80px;
            background: rgba(254, 255, 192, 0.2);
            border: 0.1px solid rgba(0, 0, 0, 0.4);
        }
        .asset-content-subthread-con {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
            margin: 20px 0;
        }
        .asset-content-subthread {
            background: rgba(0, 0, 0, 0.05);
            border-radius: 10px;
            box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.25);
        }
        .asset-content-subthread-title {
            font-size: 0.8rem;
            font-weight: 700;
            padding: 10px;
            border-radius: 10px 10px 0 0;
            box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.25);
        }
        textarea.asset-content-subthread-input {
            resize: none;
            width: calc(100% - 10px);
            height: 50px;
            padding: 5px;
            border: none;
            border-radius: 0 0 10px 10px;
        }
        button.subthread-btn {
            padding: 10px 20px;
            margin-left: 20px;
            border-radius: 10px;
            color: white;
            background-color: var(--primary-color-1);
        }
        button.subthread-btn img {
            margin-right: 10px;
            aspect-ratio: 1;
            width: 10px;
            transform: rotateZ(45deg);
        }
        .thread-summary {
            margin: 20px;
        }
        .thread-summary .asset-content-subthread-input {
            height: 100px;
        }
    </style>`;
}





export function inputArticleAssetTemplate (asset) {
    return `<div class="asset-content">
        <div class="asset-content-input-article-title">Title</div>
        <input class="asset-content-input-article-input" type="text"></input>
        <div class="asset-content-input-article-title">Content</div>
        <textarea class="asset-content-input-article-input">Use Editor Library</textarea>
    </div>
    <style>
        .asset-content-input-article-title {
            font-weight: 600;
            margin: 20px 30px 10px;
        }
        .asset-content-input-article-input {
            resize: none;
            width: calc(100% - 80px);
            padding: 10px;
            margin: 0 30px 10px;
            background: #FCFBFB;
            border: none;
            border-radius: 5px;
            box-shadow: -2px 2px 6px rgba(0, 0, 0, 0.15);
        }
        textarea.asset-content-input-article-input {
            height: 150px;
        }
    </style>`;
}