// This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
// Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
// session persistence, api calls, and more.
const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speechText = '<speak>'
                         +'ときめきコボリアルの世界へようこそ。'
                         +'<audio src="https://ikarimoto-test.s3-ap-northeast-1.amazonaws.com/shine1_up.mp3" />'
                         + 'まずは「あらすじ」と言ってみてください。</speak>';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};

const ArasujiIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ArasujiIntent';
    },
    handle(handlerInput) {
        const speechText = '<speak>'
                         + 'このゲームの主人公は架空の私立高校「MF高校」に入学した男子生徒である。'
                         + '<break time="0.5s"/>'
                         + '主人公は、「卒業式の日に、校庭のはずれにある、伝説の樹の下での、女の子からの告白で生まれたカップルは永遠に幸せになる」という、'
                         + 'MF高校の伝説を聞く。'
                         + '<break time="0.5s"/>'
                         + '勉強、スポーツ、部活動などに取り組み、主人公の能力値を高め、幼なじみで憧れのヒロイン、こぼるしおりの理想に近付け、'
                         + 'さらにはデートを重ねて親しくなり、卒業式の日に、伝説の樹の下で、彼女からの告白を受けることが目的である。'
                         + '<break time="0.5s"/>'
                         + 'そして、なんやかんやありまして．．．卒業式当日'
                         + '<break time="1s"/>'
                         + '次は、「呼び出し」と言ってみてください。'
                         + '</speak>';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};

const YobidashiIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'YobidashiIntent';
    },
    handle(handlerInput) {
        const speechText ='<speak>'
                         +'<audio src="https://ikarimoto-test.s3-ap-northeast-1.amazonaws.com/sunao_cut.mp3" />'
                         +'<prosody rate="110%">'
                         +'「<say-as interpret-as="interjection">ね〜え</say-as>、卒業式が終わったら、校庭にある、大きな木の下に、来て、くれないかな！？」'
                         +'</prosody>'
                         +'<voice name="Takumi">'
                         +'彼女は少し顔を赤らめ、伏し目がちに僕に話しかけた。'
                         +'それに対して僕は彼女にこう告げた。'
                         +'</voice>'
                         +'<audio src="https://ikarimoto-test.s3-ap-northeast-1.amazonaws.com/sunao_cutend.mp3" />'
                         +'結果はどうでしたか？成功した場合は「思い出」、失敗した場合は「恋愛初心者」と言ってください。'
                         +'</speak>';

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};
const ShoshinshaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ShoshinshaIntent';
    },
    handle(handlerInput) {
        const speechText = '<speak>'
                         +'<audio src="https://ikarimoto-test.s3-ap-northeast-1.amazonaws.com/toikioku_cut.mp3" />'
                         +'<prosody rate="110%">'
                         +'「そっかぁ」'
                         + '<break time="0.5s"/>'
                         +'「じゃあー'
                         + '<break time="0.5s"/>'
                         +'また、'
                         + '<break time="0.5s"/>'
                         +'今度ね・・・」'
                         +'</prosody>'
                         + '<break time="0.5s"/>'
                         +'そして二人は卒業し、その後二度と会うことはなかった。'
                         +'<audio src="https://ikarimoto-test.s3-ap-northeast-1.amazonaws.com/toikioku_cutend.mp3" />'
                         +'続ける場合は「初めから」、終わる場合は「終了」と言ってください。'
                         +'</speak>'
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};

const OmoideIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'OmoideIntent';
    },
    handle(handlerInput) {
        const speechText ='<speak>'
                         +'<prosody rate="110%" pitch="+5%">'
                         +'「ありがとう！それじゃあ待ってるね！」'
                         +'</prosody>'
                         +'<break time="0.5s"/>'
                         +'<voice name="Takumi">'
                         +'（急に呼び出して、どうしたんだろう？LINEじゃダメなのかな？）'
                         +'<break time="0.5s"/>'
                         +'彼女は小走りに、卒業式の行われる体育館へと向かった。'
                         +'</voice>'
                         +'<break time="0.5s"/>'
                         +'そして卒業式の後'
                         +'<break time="0.5s"/>'
                         +'<audio src="https://ikarimoto-test.s3-ap-northeast-1.amazonaws.com/sunao_cut.mp3" />'
                         +'<prosody rate="110%">'
                         +'「<say-as interpret-as="interjection">ごめんなさい</say-as>、こんなところに呼び出したりして。今日あなたにどうしても直接言いたいことがあって。だからLINEじゃダメだったの。」'
                         +'</prosody>'
                         +'<voice name="Takumi">'
                         +'（こっ、こいつ、エスパーか！？）'
                         +'<break time="0.5s"/>'
                         +'彼女は、服の袖を握り締め、モジモジしながら続けた。'
                         +'（どうしたんだろう。トイレでも我慢しているのかな？）'
                         +'</voice>'
                         +'<prosody rate="110%">'
                         +'「ねぇ、覚えてる？１年前に初めて二人でいった水族館のこと。」'
                         +'</prosody>'
                         +'<voice name="Takumi">'
                         +'それに対して僕は彼女にこう告げた。'
                         +'</voice>'
                         +'<audio src="https://ikarimoto-test.s3-ap-northeast-1.amazonaws.com/sunao_cutend.mp3" />'
                         + '結果はどうでしたか？成功した場合は「告白」、失敗した場合は「恋愛中級者」と言ってください。'
                         + '</speak>';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};
const ChukyushaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ChukyushaIntent';
    },
    handle(handlerInput) {
        const speechText = '<speak>'
                         +'<audio src = "https://ikarimoto-test.s3-ap-northeast-1.amazonaws.com/toikioku_cut.mp3" />'
                         +'<prosody rate="110%" volume="loud" pitch="high">'
                         +'「ひどいっ！私にとっては大切な思い出だったのに・・・」'
                         + '<break time="0.5s"/>'
                         +'「もう知らないっ！」'
                         +'パシッ！'
                         +'</prosody>'
                         +'<audio src="https://ikarimoto-test.s3-ap-northeast-1.amazonaws.com/hit.mp3" />'
                         +'<voice name="Takumi">'
                         +'僕は頬に平手打ちを喰らい、その場に立ち尽くした。'
                         +'</voice>'
                         +'<audio src="https://ikarimoto-test.s3-ap-northeast-1.amazonaws.com/toikioku_cutend.mp3" />'
                         +'続ける場合は「初めから」、終わる場合は「終了」と言ってください。'
                         +'</speak>'
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};

const KokuhakuIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'KokuhakuIntent';
    },
    handle(handlerInput) {
        const speechText = '<speak>'
                         +'<prosody rate="110%" volume="loud" pitch="+5%">'
                         +'「覚えててくれたんだ、うれしい！」'
                         +'</prosody>'
                         +'<voice name="Takumi">'
                         +'彼女はとびきりの笑顔で微笑んだ。'
                         + '<break time="0.5s"/>'
                         +'その笑顔に、僕は頬が紅潮するのを感じた。'
                         +'</voice>'
                         +'<audio src = "https://ikarimoto-test.s3-ap-northeast-1.amazonaws.com/kokuhaku_cut.mp3" />'
                         +'<prosody rate="110%" volume="loud" pitch="+5%">'
                         +'「あのね、まず、結論から言うね？<break time="0.5s"/>私、あなたのこと好きになっちゃったみたい。」'
                         +'</prosody>'
                         +'<break time="1s"/>'
                         +'<voice name="Takumi">'
                         +'<prosody rate="100%" volume="loud" pitch="high">'
                         +'「<say-as interpret-as="interjection">えっ</say-as>？」'
                         +'</prosody>'
                         +'</voice>'
                         +'<prosody rate="110%" volume="loud" pitch="+5%">'
                         +'「この関係が崩れるくらいなら、幼なじみのままでいいと思っていた時もありました。」'
                         +'</prosody>'
                         +'<voice name="Takumi">'
                         +'「口調変わってない？」'
                         +'</voice>'
                         +'<prosody rate="110%" volume="loud" pitch="+5%">'
                         +'「ごめん、緊張しすぎちゃって！」'
                         +'</prosody>'
                         +'<voice name="Takumi">'
                         +'そして彼女は続けた。'
                         +'</voice>'
                         +'<prosody rate="110%">'
                         +'「私たち、それぞれ違う大学に進学するでしょ？だから、卒業する今になって、明日からもう中々会えないんだって思ったら、いてもたっても居られなくなって。」'
                         +'<break time="0.5s"/>'
                         +'「女の子から告白するなんて、とっても恥ずかしかったけど、勇気を出して言います。」'
                         +'</prosody>'
                         +'<prosody rate="110%" volume="loud" pitch="+5%">'
                         +'<break time="0.5s"/>'
                         +'「好きです。あなたのことが大好きです。」'
                         +'</prosody>'
                         +'<voice name="Takumi">'
                         +'それに対して僕は彼女にこう告げた。'
                         +'</voice>'
                         +'<audio src = "https://ikarimoto-test.s3-ap-northeast-1.amazonaws.com/kokuhaku_cutend.mp3" />'
                         + '結果はどうでしたか？成功した場合は「ハッピーエンド」、失敗した場合は「女心って難しい」と言ってください。'
                         +'</speak>';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};
const HappyEndIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HappyEndIntent';
    },
    handle(handlerInput) {
        const speechText ='<speak>'
                         +'<audio src="https://ikarimoto-test.s3-ap-northeast-1.amazonaws.com/koi_cut.mp3" />'
                         +'<prosody rate="110%" volume="loud" pitch="high">'
                         +'「<say-as interpret-as="interjection">あれれっ</say-as>、<break time="0.2s"/>嬉しいはずなのに、涙が出て来ちゃった！'
                         +'<say-as interpret-as="interjection">うれしい</say-as>！<break time="0.2s"/>いつまでも私のそばにいてね。'
                         +'<break time="0.2s"/>ゆりかごから墓場まで。」'
                         +'</prosody>'
                         +'<voice name="Takumi">'
                         +'彼女のいつもの冗談に、僕はつられて笑ったよ。プクプク笑ったよ。'
                         +'</voice>'
                         +'<audio src = "https://ikarimoto-test.s3-ap-northeast-1.amazonaws.com/koi_cutend.mp3" />'
                         +'<say-as interpret-as="interjection">お疲れさまでした</say-as>'
                         +'</speak>';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};

const OnnagokoroIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'OnnagokoroIntent';
    },
    handle(handlerInput) {
        const speechText ='<speak>'
                         +'<prosody rate="120%" volume="loud" pitch="-10%">'
                         +'「そんな固定長な回答いらないわ。<break time ="0.2s"/>じゃあね。」'
                         +'</prosody>'
                         +'<audio src="https://ikarimoto-test.s3-ap-northeast-1.amazonaws.com/cut.mp3" />'
                         +'<prosody pitch="-10%">'
                         +'彼女の顔からはすーっと笑顔が消え、その場を去っていった。'
                         +'そして僕たちの高校生活が終わった。'
                         +'</prosody>'
                         +'<audio src="https://ikarimoto-test.s3-ap-northeast-1.amazonaws.com/elegy_cut.mp3" />'
                         +'続ける場合は「初めから」、終わる場合は「終了」と言ってください。'
                         +'</speak>'
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};


const AudioStartIntentHander = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AudioStartIntent';
    },
    handle(handlerInput) {
        const url = "https://ikarimoto-test.s3-ap-northeast-1.amazonaws.com/sunao.mp3";
        const token = "sample";
        return handlerInput.responseBuilder
            .addAudioPlayerPlayDirective('REPLACE_ALL', url, token, 0, null)
            .getResponse();
    }
};

const PauseIntentHander = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.PauseIntent';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder
            .addAudioPlayerStopDirective()
            .getResponse();
    }
};
const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You can say hello to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Goodbye!';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};

// The intent reflector is used for interaction model testing and debugging.
// It will simply repeat the intent the user said. You can create custom handlers
// for your intents by defining them above, then also adding them to the request
// handler chain below.
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

// Generic error handling to capture any syntax or routing errors. If you receive an error
// stating the request handler chain is not found, you have not implemented a handler for
// the intent being invoked or included it in the skill builder below.
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${error.stack}`);
        const speakOutput = `Sorry, I had trouble doing what you asked. Please try again.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

// The SkillBuilder acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        ArasujiIntentHandler,
        YobidashiIntentHandler,
        ShoshinshaIntentHandler,
        OmoideIntentHandler,
        ChukyushaIntentHandler,
        KokuhakuIntentHandler,
        HappyEndIntentHandler,
        OnnagokoroIntentHandler,
        AudioStartIntentHander,
        PauseIntentHander,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler, // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers
    )
    .addErrorHandlers(
        ErrorHandler,
    )
    .lambda();
