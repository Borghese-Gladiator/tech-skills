import React, { useEffect, useState } from 'react'
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
// SkillTree
import Container from '@material-ui/core/Container'
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
// Custom Icons
import SvgIcon from '@material-ui/core/SvgIcon';
// TransitionComponent
import Collapse from '@material-ui/core/Collapse';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support

// SearchTopicBar
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

// ActionButtonBar
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useSearchStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 300,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 5,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}))
function SearchTopicBar(props) {
  const classes = useSearchStyles()
  const { searchAndOpen } = props

  const onChange = (event) => {
    const searchLabel = event.target.value
    console.log(event.target.value)
    searchAndOpen(searchLabel)
  };
  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search Topics"
        inputProps={{ 'aria-label': 'search topics' }}
        onChange={onChange}
      />
      <IconButton className={classes.iconButton} aria-label="search" onClick={() => { console.log('onClick'); }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

function ActionButtonBar(props) {
  const { data, setExpanded } = props
  
  const collapseAll = () => {
    setExpanded([])
  }
  const uncollapseAll = () => {
    const expandList = []
    data.forEach((val, idx) => {
      expandList.push(val.id) // push top layer node IDs
      // expandList.push(...convertTreeToList(val))
    })
    setExpanded(expandList)
  }
  return (
    <ButtonGroup size="small" variant="text" color="primary" aria-label="small outlined button group" style={{ padding: "3px" }}>
      <Button onClick={uncollapseAll}>Uncollapse</Button>
      <Button onClick={collapseAll}>Collapse All</Button>
    </ButtonGroup>
  )
}

function MinusSquare(props) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
    </SvgIcon>
  );
}

function PlusSquare(props) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 18, height: 18 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
    </SvgIcon>
  );
}

function CloseSquare(props) {
  return (
    <SvgIcon className="close" fontSize="inherit" style={{ width: 18, height: 18 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z" />
    </SvgIcon>
  );
}

function TransitionComponent(props) {
  const style = useSpring({
    from: { opacity: 0, transform: 'translate3d(20px,0,0)' },
    to: { opacity: props.in ? 1 : 0, transform: `translate3d(${props.in ? 0 : 20}px,0,0)` },
  });

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  );
}

TransitionComponent.propTypes = {
  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,
};

const StyledTreeItem = withStyles((theme) => ({
  iconContainer: {
    '& .close': {
      opacity: 0.3,
    },
  },
  group: {
    marginLeft: 7,
    paddingLeft: 18,
    borderLeft: `1px dashed ${fade(theme.palette.text.primary, 0.4)}`,
  },
}))((props) => <TreeItem {...props} TransitionComponent={TransitionComponent} />);

const useStyles = makeStyles({
  rootPaper: {
    padding: '8px 16px',
  },
  panelHeading: {
    backgroundColor: "#ededed",
    borderRadius: "6px 6px 0 0",
    color: "#363636",
    fontSize: "1.25em",
    fontWeight: 700,
    lineHeight: 1.25,
    padding: ".75em 1em",
    marginTop: 0,
    marginBottom: 0
  }
})
export default function SkillTree(props) {
  const classes = useStyles();
  const { data, labelParentClickHandler } = props
  const [expanded, setExpanded] = useState([]);
  const [selected, setSelected] = useState([]);
  useEffect(() => console.log(expanded), [expanded]);

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
  };

  const renderTree = (nodes) => (
    // Material UI:  onLabelClick={handleClick} does not allow customization
    <StyledTreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name} onLabelClick={() => labelParentClickHandler(nodes.name)}>
      {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
    </StyledTreeItem>
  );

  function searchAndOpen(text) {
    console.log("SEARCH and open: " + text)
  }

  return (
    <Container>
      <Paper elevation={3} className={classes.rootPaper}>
        <h2 className={classes.panelHeading}>Topics</h2>
        <SearchTopicBar searchAndOpen={searchAndOpen} />
        <ActionButtonBar data={data} setExpanded={(val) => setExpanded(val)} />
        <TreeView
          className={classes.root}
          defaultCollapseIcon={<MinusSquare />}
          defaultExpandIcon={<PlusSquare />}
          defaultEndIcon={<CloseSquare />}
          expanded={expanded}
          selected={selected}
          onNodeToggle={handleToggle}
          onNodeSelect={handleSelect}
        >
          {data.map((val, idx) => renderTree(val))}
        </TreeView>
      </Paper>
    </Container>
  );
}
/*
COLLAPSE ALL (Material UI does not allow all to get uncollapsed at once I think - 1 level at a time)
    *
    *  https://danmartensen.svbtle.com/converting-a-tree-to-a-list-in-javascript 
    *  Pre-order tree traversal visits each node using stack. 
    *  Checks if leaf node based on children === null otherwise 
    *  pushes all children into stack and continues traversal. 
    *  hashMap object literal used for deduping.
    *  @param root - deserialized JSON root to begin traversal
    *  @returns array  - final array of nodes in order with no dups
    *
   function convertTreeToList(root) {
    *
    *  For each node visit if node not a hashMap key, insert 
    *  into array.  Then append node into end of the array.
    *  @params node - object to check
    *  @param hashMap - object literal used for deduping
    *  @param array - final array that nodes are inserted
    *
    function visitNode(node, hashMap, array) {
      if (!hashMap[node.id]) {
        hashMap[node.id] = true;
        array.push(node.id);
      }
    }
    let stack = [], array = [], hashMap = {};
    stack.push(root);
    while (stack.length !== 0) {
      const node = stack.pop();
      // check for 'children' key
      if (!('children' in node) || node.children === null) {
        visitNode(node, hashMap, array);
      } else {
        for (let i = node.children.length - 1; i >= 0; i--) {
          stack.push(node.children[i]);
        }
      }
    }
    return array;
  }
*/