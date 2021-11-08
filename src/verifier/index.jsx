import React from 'react';

let result;

const verify = async () => {
    const credentialQuery =   {
        "web": {
          "VerifiablePresentation": {
            "query": [{
              "type": "QueryByExample",
              "credentialQuery": {
                "reason": "Please present a UniversityDegreeCredential for JaneDoe.",
                "example": {
                  "@context": [
                    "https://w3id.org/credentials/v1",
                    "https://www.w3.org/2018/credentials/examples/v1"
                  ],
                  "type": ["UniversityDegreeCredential"],
                  "credentialSubject": {
                    "id": "did:example:ebfeb1f712ebc6f1c276e12ec21"
                  }
                }
              }
            }]
          },
          "recommendedHandlerOrigins": [
            "http://localhost:3000"
          ]
        }
      }

    result = await navigator.credentials.get(credentialQuery);
    if(!result) {
        console.log('get credential operation did not succeed');
    }
}

const Verifier = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <h1>Verifier App</h1>
            <button style={{width: 200}} onClick={verify} >Verify Credential</button>
            <div>
                {`Result of get() request: ${result? JSON.stringify(result) : `{}`}`}
            </div>
        </div>
    )
}

export default Verifier;