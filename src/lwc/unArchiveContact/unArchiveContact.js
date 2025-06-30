import { track,api,LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import {FlowAttributeChangeEvent, FlowNavigationNextEvent} from 'lightning/flowSupport';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
//import unarchival from '@salesforce/apex/UnarchiveHelper.unarchival';

export default class unArchiveContact extends NavigationMixin(LightningElement) {
    @api recordId;
    @api  txtBoxVal = '';

    testing = true;
    isSpinner= true;
    record;
    connectedCallback(){
        console.log('This is value of the record :' + this.recordId);
        //this.unarchivalJS();
        this.isSpinner = false;
        this.navigateToRecordPage();
    }

    unarchivalJS(){
       /* unarchival({
            Id : this.recordId 
        })
        .then(result => {
            if(result != null){
                console.log('Result \n ', result);
                this.record= result;
                console.log('This is thr record id '+ this.record);
                this.navigateToContactRecord();
                this.dispatchEvent(new ShowToastEvent({
                    title: 'CSN Update!',
                    message: 'CSN has been generated and updated on the account successfully.',
                    variant: 'success',
                    mode: 'sticky'
            }));
            }else if(result === 'HasCSN'){
                console.log('Account has CSN already ...');
                this.dispatchEvent(new ShowToastEvent({
                    title: 'CSN Update!',
                    message: 'This account already has CSN assigned.',
                    variant: 'warning',
                    mode: 'sticky'
                })); 
            }else if(result === 'NoCSN'){
                this.dispatchEvent(new ShowToastEvent({
                    title: 'CSN Update!',
                    message: 'MDM CSN generation API is down. Please try later',
                    variant: 'warning',
                    mode: 'sticky'
                }));
            }else{
                console.log('For any error...');
                this.dispatchEvent(new ShowToastEvent({
                    title: 'CSN Update!',
                    message: 'Error occured ! Please try later.',
                    variant: 'error',
                    mode: 'sticky'
                }));
            }
        })
        .catch(error => {
            console.error('Error: \n ', error);
            this.dispatchEvent(new ShowToastEvent({
                title: 'CSN Update!',
                message: error,
                variant: 'error',
                mode: 'sticky'
            }));
        })*/
    }

    get myName() {
        return this.record?.orderID__c;
    }

    get myIndustry() {
        return this.record?.orderLine__c;
    }

    get myRating() {
        return this.record?.product__c;
    }

    get myWebsite() {
        return this.record?.quantity__c;
    }

    get unitprice() {
        return this.record?.unitPrice__c;
    }

    showToast() {
        const event = new ShowToastEvent({
            title: 'Toast message',
            message: 'Toast Message',
            variant: 'success',
            mode: 'dismissable'
        });
        this.dispatchEvent(event);
    }
    navigateToRecordPage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '0037F00001HsqDQQAZ',
                objectApiName: 'Contact',
                actionName: 'view'
            }
        });
        console.log('Navigation coded executed :');
    }
}