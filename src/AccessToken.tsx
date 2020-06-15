import React, { useState, useEffect, useContext } from 'react';
import { ExtensionContextData, ExtensionContext } from '@looker/extension-sdk-react';
import { Code, Button, Grid } from '@looker/components';
import styled from 'styled-components'

export function AccessToken() {
  const [me, setMe] = useState<any>();
  const [access_token, setAccessToken] = useState<any>();
  const [show_copy, setShowCopy] = useState(false)
  const extensionContext = useContext<ExtensionContextData>(ExtensionContext)
  const sdk = extensionContext.coreSDK

  useEffect(()=>{
    getUser();
  },[])

  useEffect(()=>{
    var range = document.createRange();
    if (show_copy && access_token?.access_token) {
      {
        const CopyNode = document.getElementById('copyme');
        if (CopyNode) {
          range.selectNodeContents(CopyNode);
          var sel = window.getSelection();
          if (sel) {
            sel.removeAllRanges();
            sel.addRange(range); 
            document.execCommand('copy');
            sel.removeAllRanges();
          }
        }
      }
    }
  }, [show_copy, access_token])

  const getUser = async () => {
    const me = await sdk.ok(sdk.me())
    setMe(me)
  }

  const getAccessToken = async (e: any) => {
    const login_user = await sdk.ok(sdk.login_user(me!.id))
    setAccessToken(login_user)
    setShowCopy(true)
    setInterval(()=>{
      setShowCopy(false)
    },5000)
  }
  
  if (me?.id) {
    return (
      <Grid columns={2}>
          <Button onClick={(e)=>{getAccessToken(e)}}>Get an Access Token for the Looker API</Button>
          <StyledCode id="copyme">{(access_token?.access_token)?access_token.access_token:''}</StyledCode>
          <StyledCode>{(show_copy)?'Copied to clipboard!':''}</StyledCode>
      </Grid>
        ); 
  } else {
    return <></>
  }
}

const StyledCode = styled(Code)`
  margin: auto;
`
