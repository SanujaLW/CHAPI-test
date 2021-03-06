import React from 'react';
import { WebCredential } from 'credential-handler-polyfill';

const issue = async () => {
    const presentation = {
        "@context": [
          "https://www.w3.org/2018/credentials/v1",
          "https://www.w3.org/2018/credentials/examples/v1"
        ],
        "type": "VerifiablePresentation",
        "verifiableCredential": [{
          "@context": [
            "https://www.w3.org/2018/credentials/v1",
            "https://www.w3.org/2018/credentials/examples/v1"
          ],
          "id": "http://example.edu/credentials/1872",
          "type": ["VerifiableCredential", "UniversityDegreeCredential"],
          "issuer": "https://example.edu/issuers/565049",
          "issuanceDate": "2010-01-01T19:73:24Z",
          "credentialSubject": {
            "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
            "alumniOf": {
              "id": "did:example:c276e12ec21ebfeb1f712ebc6f1",
              "name": {
                "@value": "Example University",
                "@language": "en"
              }
            }
          },
          "proof": {
            "type": "RsaSignature2018",
            "created": "2017-06-18T21:19:10Z",
            "proofPurpose": "assertionMethod",
            "verificationMethod": "https://example.edu/issuers/keys/1",
            "jws": "eyJhbGciOiJSUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..TCYt5XsITJX1CxPCT8yAV-TVkIEq_PbChOMqsLfRoPsnsgw5WEuts01mq-pQy7UJiN5mgRxD-WUcX16dUEMGlv50aqzpqh4Qktb3rk-BuQy72IFLOqV0G_zS245-kronKb78cPN25DGlcTwLtjPAYuNzVBAh4vGHSrQyHUdBBPM"
          }
        }]
      };
    
    const webCredential = new WebCredential('VerifiablePresentation', presentation);

    const result = await navigator.credentials.store(webCredential);
    if(!result) {
        console.log('store credential operation did not succeed');
    }
}

const Issuer = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <h1>Issuer App</h1>
            <button style={{width: 200}} onClick={issue} >Issue Credential</button>
        </div>
    )
}

export default Issuer;